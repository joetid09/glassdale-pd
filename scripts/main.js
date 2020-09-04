import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./crimes/ConvictionSelect.js"
import { getConvictions } from "./crimes/ConvictionProvider.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "../notes/noteForm.js"

// CriminalList()
ConvictionSelect()
CriminalList()

OfficerSelect()
NoteForm()