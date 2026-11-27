import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { style } from '../app/styles';
import type { RecipeNote } from '../data/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    recipeId: number;
    onInputFocus: () => void;
}

export default function RecipeNotes({ recipeId, onInputFocus }: Props) {
    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState<RecipeNote[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const [storageError, setStorageError] = useState('');
    const storageKey = `recipe-notes:${recipeId}`;
    const [isSaving, setIsSaving] = useState(false);
    const actionsDisabled = isLoading || isSaving || storageError !== '';
    const saveDisabled = actionsDisabled || !noteText.trim();

    useEffect(() => {
        let active = true;

        async function loadNotes() {
            setIsLoading(true);
            setStorageError('');

            try {
                const savedNotes = await AsyncStorage.getItem(storageKey);
                const loadedNotes: RecipeNote[] = savedNotes
                    ? JSON.parse(savedNotes)
                    : [];

                if (active) {
                    setNotes(loadedNotes);
                }
            } catch {
                if (active) {
                    setStorageError('Nepavyko nuskaityti pastabų.');
                }
            } finally {
                if (active) {
                    setIsLoading(false);
                }
            }
        }

        loadNotes();

        return () => {
            active = false;
        };
    }, [storageKey]);

    async function saveNotes(updatedNotes: RecipeNote[]) {
        setIsSaving(true);

        try {
            await AsyncStorage.setItem(
                storageKey,
                JSON.stringify(updatedNotes)
            );

            setNotes(updatedNotes);
            return true;
        } catch {
            Alert.alert('Klaida', 'Nepavyko išsaugoti pastabų.');
            return false;
        } finally {
            setIsSaving(false);
        }
    }
    async function addNote() {
        if (isLoading || isSaving || storageError) return;

        const text = noteText.trim();
        if (!text) return;

        const newNote: RecipeNote = {
            id: Date.now().toString(),
            recipeId,
            text,
        };

        const saved = await saveNotes([...notes, newNote]);

        if (saved) {
            setNoteText('');
        }
    }

    async function deleteNote(noteId: string) {
        if (isLoading || isSaving || storageError) return;

        await saveNotes(notes.filter(note => note.id !== noteId));
    }

    return (
        <View>
            <Text style={style.detailsSectionTitle}>Mano pastabos</Text>
            {isLoading && (
                <Text style={style.detailsDescription}>Kraunamos pastabos…</Text>
            )}

            {storageError !== '' && (
                <Text style={style.noteDeleteText}>{storageError}</Text>
            )}
            {notes
                .filter(note => note.recipeId === recipeId)
                .map(note => (
                    <View key={note.id} style={style.noteItem}>
                        <Text style={style.noteText}>{note.text}</Text>

                        <Pressable
                            onPress={() => deleteNote(note.id)}
                            disabled={actionsDisabled}
                            accessibilityRole="button"
                            accessibilityLabel={`Ištrinti pastabą: ${note.text}`}
                            hitSlop={8}
                        >
                            <Text style={style.noteDeleteText}>Ištrinti</Text>
                        </Pressable>
                    </View>
                ))}
            <TextInput
                editable={!actionsDisabled}
                accessibilityLabel="Nauja pastaba"
                style={style.noteInput}
                value={noteText}
                onChangeText={setNoteText}
                placeholder="Ką kitą kartą darytum kitaip?"
                placeholderTextColor="#B7C5BA"
                multiline
                onFocus={onInputFocus}
            />
            <Pressable
                style={[
                    style.noteButton,
                    saveDisabled && style.noteButtonDisabled,
                ]}
                disabled={saveDisabled}
                accessibilityRole="button"
                onPress={addNote}
            >
                <Text style={style.noteButtonText}>
                    {isSaving ? 'Saugoma…' : 'Išsaugoti pastabą'}
                </Text>
            </Pressable>
        </View>
    );
}
