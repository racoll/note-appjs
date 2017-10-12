# User Stories to Domain Model

## Scenario

### 1.
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

<!--
 substring(start,end) Need here
-->

### 2.
As a programmer
I can create a new note
So I can record something I need to remember

### 3.
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note


## Nouns in User Stories
- Programmer
- Note
- NoteList

## Verbs in User Stories
- createNote
- listNotes
- findNote
- viewDetails
- EditNote ???
- deleteNote ???

##  Functional representation of that story
| Objects    | Messages                                                   |
|------------|------------------------------------------------------------|
| Programmer |                                                            |
| Note       | CreateNote<br>listNotes<br>findNote<br>viewDetails         |
| NoteList   |                                                            |

## How our Objects will use Messages to communicate with one another
- Note <-- CreateNote
- Note <-- listNotes --> Note(s)
- Note <-- findNote --> Note
- Note <-- viewDetails --> Note
