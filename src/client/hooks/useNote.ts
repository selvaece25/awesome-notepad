import React, { useState, useCallback } from 'react';
import useFetch from '@/hooks/useQuery';
import { useToasts } from 'react-toast-notifications';
import { ErrorCode }  from '../constants/errorConstants';
import { defaultActiveNote } from '../constants/appConstants';
import { SuccessCode } from '../constants/successConstants';
import { NoteItem } from '../types';


export default function usePalletize() {
	const { fetchData } = useFetch();
	const { addToast } = useToasts();
	const [notes, setNotes] = useState < NoteItem[] > ([]);
	const [activeNote, setActiveNote] = useState < object > (defaultActiveNote);
	const [isAddNote, setAddNote] = useState < boolean > (false);
	const [isLoading, setLoading] = useState(true);
	const [isFormProcessing, setFormProcess] = useState(false);
	const showNewNote = useCallback(() => {
		setActiveNote((prevState: any) => ({...prevState, id: null, note: null }));
		setAddNote(true);
	}, []);
	const fetchNotes = async() => {
		try {
			setLoading(true);
			const responses = await fetchData({ method: 'GET', url: `task` });
			if (responses && responses.length) {
				const noteData = responses.map((response: any) => {
					return { id: response._id, note: response.description };
				});
				setNotes(noteData);
				selectActiveNote(noteData[0].id);
			}
		} catch (err) {
			addToast(ErrorCode['NOTE_LIST_FAILED'], { appearance: 'error' });
		} finally {
			setLoading(false);
		}
	}
	const selectActiveNote = async (id: number) => {
		try {
			setFormProcess(true);
			const responses = await fetchData({ method: 'GET', url: `task/${id}` });
			if (responses && responses.description) {
			  setActiveNote((prevState: any) => ({...prevState, id: responses._id, note : responses.description }));
		      setAddNote(false);
			}
		}  catch (err) {
			addToast(ErrorCode['NOTE_DETAIL_FAILED'], { appearance: 'error' });
		} finally {
			setFormProcess(false);
		}
		
	}

	const saveNoteRecord = (noteId: number, noteText: string) => {
		try {
			if (noteId) {
				updateActiveNote(noteId, noteText);
			} else {
				createNote(noteText);
			}
		} catch (err) {
			addToast(ErrorCode['NOTE_PROCESS_FAILED'], { appearance: 'error' });
		}
	}
	const createNote = async(noteText: string) => {
		try {
			setFormProcess(true);
			const responses = await fetchData({
				method: 'POST',
				url: `task`,
				payloadData: { description: noteText }
			});
			if (responses && responses._id) {
				addToast(SuccessCode['NOTE_CREATE_SUCCESS'], { appearance: 'success'});
				setNotes((prevNotes: NoteItem[]) => ([...prevNotes, {
					id: responses._id,
					note: responses.description
				}]));
				setActiveNote((prevState: any) => ({...prevState,
					id: responses._id,
					note: responses.description
				}));
				setAddNote(false);
			}
		} catch (err) {
			addToast(ErrorCode['NOTE_CREATE_FAILED'], { appearance: 'error' });
		} finally {
			setFormProcess(false);
		}
	}
	const updateActiveNote = async(noteId: number, noteText: string) => {
		try {
			setFormProcess(true);
			const responses = await fetchData({
				method: 'PUT',
				url: `task/${noteId}`,
				payloadData: { description: noteText }
			});
			if (responses && responses._id) {
				let newNotes = [...notes];
				const aciveNotIndex = newNotes.findIndex(note => note.id === noteId);
				newNotes[aciveNotIndex] = { id: responses._id, note: responses.description };
				setNotes(newNotes);
				addToast(SuccessCode['NOTE_UPDATE_SUCCESS'], { appearance: 'success' });
			}
		} catch (err) {
			addToast(ErrorCode['NOTE_UPDATE_FAILED'], { appearance: 'error' });
		} finally {
			setFormProcess(false);
		}
	}

	return {
		isFormProcessing,
		notes,
		saveNoteRecord,
		fetchNotes,
		activeNote,
		setActiveNote,
		isAddNote,
		showNewNote,
		isLoading,
		selectActiveNote
	};
}