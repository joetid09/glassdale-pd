import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./crimes/ConvictionSelect.js"
import { getConvictions } from "./crimes/ConvictionProvider.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "../notes/noteForm.js"
import { NoteList } from '../notes/noteList.js';
import { AlibiDialog } from "./criminals/alibiDialog.js"
import { criminalHTML } from "./criminals/Criminal.js"

// CriminalList()

ConvictionSelect()
CriminalList()
OfficerSelect()
criminalHTML()
NoteForm()
NoteList()