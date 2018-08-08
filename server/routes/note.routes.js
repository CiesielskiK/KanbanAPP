import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';


const router = new Router();

// Add a new note
router.route('/notes').post(NoteController.addNote);

// Edit note name

router.route('/notes/:noteId').put(NoteController.editNote);

// Delete a note in laneId

router.route('/notes/:noteId').delete(NoteController.deleteNote);


export default router;
