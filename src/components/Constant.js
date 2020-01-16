export const N = {
    'C': 1,
    'C#': 2,
    'Db': 2,
    'D': 3,
    'D#': 4,
    'Eb': 4,
    'E': 5,
    'E#': 6,
    'F': 6,
    'F#': 7,
    'Gb': 7,
    'G': 8,
    'G#': 9,
    'Ab': 9,
    'A': 10,
    'A#': 11,
    'Bb': 11,
    'B': 12
}

export const N2 = {}

for (let key in N) {
    N2[key] = N[key] + 12;
}

export const N3 = {}

for (let key in N) {
    N3[key] = N2[key] + 12;
}

export const noteData = {
    testData: {
        // '': [],
        'C': [N['C'], N['E'], N['G']],
        'CM': [N['C'], N['E'], N['G']],
        'Cm': [N['C'], N['E'], N['G']],
        'Cmaj': [N['C'], N['E'], N['G']],
        'Cmin': [N['C'], N['Eb'], N['G']],
        'Csus4': [N['C'], N['F'], N['G']],
        'Csus2': [N['C'], N['D'], N['G']],
        'Caug': [N['C'], N['E'], N['G#']],
        'Cdim': [N['C'], N['Eb'], N['Gb']],
        'CM6': [N['C'], N['E'], N['G'], N['A']],
        'Cmaj6': [N['C'], N['E'], N['G'], N['A']],
        'Cmin6': [N['C'], N['Eb'], N['G'], N['A']],
        'Cmin7': [N['C'], N['Eb'], N['G'], N['Bb']],
        'C7': [N['C'], N['E'], N['G'], N['Bb']],
        'CM7': [N['C'], N['E'], N['G'], N['B']],
        'Cmaj7': [N['C'], N['E'], N['G'], N['B']],
        'C9': [N['C'], N['E'], N['G'], N['Bb'], N2['D']],
        'CM9': [N['C'], N['E'], N['G'], N['B'], N2['D']],
        'Cmaj9': [N['C'], N['E'], N['G'], N['B'], N2['D']],
        'Cmin9': [N['C'], N['Eb'], N['G'], N['Bb'], N2['D']],
        'C9#5': [N['C'], N['E'], N['G#'], N['Bb'], N2['D']],
        'C9b5': [N['C'], N['E'], N['Gb'], N['Bb'], N2['D']],
        'C9aug': [N['C'], N['E'], N['G#'], N['Bb'], N2['D#']],
        'C11': [N['C'], N['E'], N['G'], N['Bb'], N2['D'], N2['F']],
        'CM11': [N['C'], N['E'], N['G'], N['B'], N2['D'], N2['F']],
        'Cmaj11': [N['C'], N['E'], N['G'], N['B'], N2['D'], N2['F']],
        'C11aug': [N['C'], N['E'], N['G#'], N['Bb'], N2['D'], N2['F']],
        'C13': [N['C'], N['E'], N['G'], N['Bb'], N2['D'], N2['F'], N2['A']],
        'CM13': [N['C'], N['E'], N['G'], N['Bb'], N2['D'], N2['F'], N2['A']],
        'Cmaj13': [N['C'], N['E'], N['G'], N['B'], N2['D'], N2['F'], N2['A']],
        'Cdim7': [N['C'], N['Eb'], N['Gb'], N['A']],
        'Cdom7': [N['C'], N['Eb'], N['G'], N['Bb']],
        'C7b5': [N['C'], N['E'], N['Gb'], N['Bb']],
        'C7#5': [N['C'], N['E'], N['G#'], N['Bb']],
        'C7b9': [N['C'], N['E'], N['G'], N['Bb'], N2['C#']],
        'C7#9': [N['C'], N['E'], N['G'], N['Bb'], N2['D#']],
        'Cmin7b': [N['C'], N['Eb'], N['G'], N['Bb']],
        'C6sus4': [N['C'], N['F'], N['G'], N['A']],
        'C7sus4': [N['C'], N['F'], N['G'], N['Bb']],
        'C9sus4': [N['C'], N['F'], N['G'], N['Bb'], N2['D']],

        'C#': [N['C#'], N['F'], N['G#']],
        'C#M': [N['C#'], N['F'], N['G#']],
        'C#m': [N['C#'], N['E'], N['G#']],
        'C#min': [N['C#'], N['E'], N['G#']],
        'C#sus4': [N['C#'], N['F#'], N['G#']],
        'C#sus2': [N['C#'], N['C#'], N['G#']],
        'C#aug': [N['C#'], N['F'], N['A']],
        'C#dim': [N['C#'], N['E'], N['G']],
        'C#M6': [N['C#'], N['F'], N['G#'], N['Bb']],
        'C#maj6': [N['C#'], N['F'], N['G#'], N['Bb']],
        'C#min6': [N['C#'], N['E'], N['G#'], N['Bb']],
        'C#min7': [N['C#'], N['E'], N['G#'], N['B']],
        'C#7': [N['C#'], N['F'], N['G#'], N2['D#']],
        'C#M7': [N['C#'], N['F'], N['G#'], N2['D#']],
        'C#maj7': [N['C#'], N['F'], N['G#'], N2['D#']],
        'C#9': [N['C#'], N['F'], N['G#'], N['B'], N2['D#']],
        'C#M9': [N['C#'], N['F'], N['G#'], N2['C'], N2['D#']],
        'C#maj9': [N['C#'], N['F'], N['G#'], N2['C'], N2['D#']],
        'C#min9': [N['C#'], N['E'], N['G#'], N['B'], N2['D#']],
        'C#9#5': [N['C#'], N['F'], N['A'], N['B'], N2['D#']],
        'C#9b5': [N['C#'], N['F'], N['G'], N['B'], N2['D#']],
        'C#9aug': [N['C#'], N['F'], N['A'], N['B'], N2['D#']],
        'C#11': [N['C#'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'C#M11': [N['C#'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'C#maj11': [N['C#'], N['F'], N['G#'], N2['C'], N2['D#'], N2['F#']],
        'C#11aug': [N['C#'], N['F'], N['A'], N['B'], N2['D#'], N2['F#']],
        'C#13': [N['C#'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['Bb']],
        'C#M13': [N['C#'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['Bb']],
        'C#maj13': [N['C#'], N['F'], N['G#'], N2['C#'], N2['D#'], N2['F#'], N2['Bb']],
        'C#dim7': [N['C#'], N['E'], N['G'], N['Bb']],
        'C#dom7': [N['C#'], N['E'], N['G#'], N['B']],
        'C#7b5': [N['C#'], N['F'], N['G'], N['B']],
        'C#7#5': [N['C#'], N['F'], N['A'], N['B']],
        'C#7b9': [N['C#'], N['F'], N['G#'], N['B'], N2['D']],
        'C#7#9': [N['C#'], N['F'], N['G#'], N['B'], N2['E']],
        'C#min7b': [N['C#'], N['E'], N['G#'], N['B']],
        'C#6sus4': [N['C#'], N['F#'], N['G#'], N['Bb']],
        'C#7sus4': [N['C#'], N['F#'], N['G#'], N['B']],
        'C#9sus4': [N['C#'], N['F#'], N['G#'], N['B'], N2['D#']],

        'Db': [N['Db'], N['F'], N['G#']],
        'DbM': [N['Db'], N['F'], N['G#']],
        'Dbmaj': [N['Db'], N['F'], N['G#']],
        'Dbmin': [N['Db'], N['E'], N['G#']],
        'Dbm': [N['Db'], N['E'], N['G#']],
        'Dbsus4': [N['Db'], N['F#'], N['G#']],
        'Dbsus2': [N['Db'], N['Db'], N['G#']],
        'Dbaug': [N['Db'], N['F'], N['A']],
        'Dbdim': [N['Db'], N['E'], N['G']],
        'DbM6': [N['Db'], N['F'], N['G#'], N['Bb']],
        'Dbmaj6': [N['Db'], N['F'], N['G#'], N['Bb']],
        'Dbmin6': [N['Db'], N['E'], N['G#'], N['Bb']],
        'Dbmin7': [N['Db'], N['E'], N['G#'], N['B']],
        'Db7': [N['Db'], N['F'], N['G#'], N2['D#']],
        'DbM7': [N['Db'], N['F'], N['G#'], N2['D#']],
        'Dbmaj7': [N['Db'], N['F'], N['G#'], N2['D#']],
        'Db9': [N['Db'], N['F'], N['G#'], N['B'], N2['D#']],
        'DbM9': [N['Db'], N['F'], N['G#'], N2['C'], N2['D#']],
        'Dbmaj9': [N['Db'], N['F'], N['G#'], N2['C'], N2['D#']],
        'Dbmin9': [N['Db'], N['E'], N['G#'], N['B'], N2['D#']],
        'Db9#5': [N['Db'], N['F'], N['A'], N['B'], N2['D#']],
        'Db9b5': [N['Db'], N['F'], N['G'], N['B'], N2['D#']],
        'Db9aug': [N['Db'], N['F'], N['A'], N['B'], N2['D#']],
        'Db11': [N['Db'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'DbM11': [N['Db'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'Dbmaj11': [N['Db'], N['F'], N['G#'], N2['C'], N2['D#'], N2['F#']],
        'Db11aug': [N['Db'], N['F'], N['A'], N['B'], N2['D#'], N2['F#']],
        'Db13': [N['Db'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['Bb']],
        'DbM13': [N['Db'], N['F'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['Bb']],
        'Dbmaj13': [N['Db'], N['F'], N['G#'], N2['Db'], N2['D#'], N2['F#'], N2['Bb']],
        'Dbdim7': [N['Db'], N['E'], N['G'], N['Bb']],
        'Dbdom7': [N['Db'], N['E'], N['G#'], N['B']],
        'Db7b5': [N['Db'], N['F'], N['G'], N['B']],
        'Db7#5': [N['Db'], N['F'], N['A'], N['B']],
        'Db7b9': [N['Db'], N['F'], N['G#'], N['B'], N2['D']],
        'Db7#9': [N['Db'], N['F'], N['G#'], N['B'], N2['E']],
        'Dbmin7b': [N['Db'], N['E'], N['G#'], N['B']],
        'Db6sus4': [N['Db'], N['F#'], N['G#'], N['Bb']],
        'Db7sus4': [N['Db'], N['F#'], N['G#'], N['B']],
        'Db9sus4': [N['Db'], N['F#'], N['G#'], N['B'], N2['D#']],


        'D': [N['D'], N['F#'], N['A']],
        'DM': [N['D'], N['F#'], N['A']],
        'Dmaj': [N['D'], N['F#'], N['A']],
        'Dmin': [N['D'], N['F'], N['A']],
        'Dm': [N['D'], N['F'], N['A']],
        'Dsus4': [N['D'], N['G'], N['A']],
        'Dsus2': [N['D'], N['E'], N['A']],
        'Daug': [N['D'], N['F#'], N['A#']],
        'Ddim': [N['D'], N['F'], N['Ab']],
        'DM6': [N['D'], N['F#'], N['A'], N['B']],
        'Dmaj6': [N['D'], N['F#'], N['A'], N['B']],
        'Dmin6': [N['D'], N['F'], N['A'], N2['B']],
        'Dmin7': [N['D'], N['F'], N['A'], N2['C']],
        'D7': [N['D'], N['F#'], N['A'], N2['C']],
        'DM7': [N['D'], N['F#'], N['A'], N2['C#']],
        'Dmaj7': [N['D'], N['F#'], N['A'], N2['C#']],
        'D9': [N['D'], N['F#'], N['A'], N2['C'], N2['E']],
        'DM9': [N['D'], N['F#'], N['A'], N2['C#'], N2['E']],
        'Dmaj9': [N['D'], N['F#'], N['A'], N2['C#'], N2['E']],
        'Dmin9': [N['D'], N['F'], N['A'], N2['C'], N2['E']],
        'D9#5': [N['D'], N['F#'], N['A#'], N2['C'], N2['E']],
        'D9b5': [N['D'], N['F#'], N['A'], N2['C'], N2['E']],
        'D9aug': [N['D'], N['F#'], N['A#'], N2['C'], N2['F']],
        'D11': [N['D'], N['F#'], N['A'], N2['C'], N2['E'], N2['G']],
        'DM11': [N['D'], N['F#'], N['A'], N2['C#'], N2['E'], N2['G']],
        'Dmaj11': [N['D'], N['F#'], N['A'], N2['C#'], N2['E'], N2['G']],
        'D11aug': [N['D'], N['F#'], N['A#'], N2['C'], N2['E'], N2['G']],
        'D13': [N['D'], N['F#'], N['A'], N2['C'], N2['E'], N2['G'], N2['B']],
        'DM13': [N['D'], N['F#'], N['A'], N2['C#'], N2['E'], N2['G'], N2['B']],
        'Dmaj13': [N['D'], N['F#'], N['A'], N2['C#'], N2['E'], N2['G'], N2['B']],
        'Ddim7': [N['D'], N['F'], N['Ab'], N['B']],
        'Ddom7': [N['D'], N['F'], N['A'], N2['C']],
        'D7b5': [N['D'], N['F#'], N['Ab'], N2['C']],
        'D7#5': [N['D'], N['F#'], N['A#'], N2['C']],
        'D7b9': [N['D'], N['F#'], N['A'], N2['C'], N2['D#']],
        'D7#9': [N['D'], N['F#'], N['A'], N2['C'], N2['F']],
        'Dm7b': [N['D'], N['F'], N['A'], N2['C']],
        'D6sus4': [N['D'], N['G'], N['A'], N2['B']],
        'D7sus4': [N['D'], N['G'], N['A'], N2['C']],
        'D9sus4': [N['D'], N['G'], N['A'], N2['C'], N2['E']],

        'D#': [N['D#'], N['G'], N['A#']],
        'D#M': [N['D#'], N['G'], N['A#']],
        'D#maj': [N['D#'], N['G'], N['A#']],
        'D#min': [N['D#'], N['F#'], N['A#']],
        'D#m': [N['D#'], N['F#'], N['A#']],
        'D#sus4': [N['D#'], N['G#'], N['A#']],
        'D#sus2': [N['D#'], N['F'], N['A#']],
        'D#aug': [N['D#'], N['G'], N['B']],
        'D#dim': [N['D#'], N['F#'], N['A']],
        'D#M6': [N['D#'], N['G'], N['A#'], N2['C']],
        'D#maj6': [N['D#'], N['G'], N['A#'], N2['C']],
        'D#min6': [N['D#'], N['F#'], N['A#'], N2['C']],
        'D#min7': [N['D#'], N['F#'], N['A#'], N2['C#']],
        'D#7': [N['D#'], N['G'], N['A#'], N2['F']],
        'D#M7': [N['D#'], N['G'], N['A#'], N2['F']],
        'D#maj7': [N['D#'], N['G'], N['A#'], N2['F']],
        'D#9': [N['D#'], N['G'], N['A#'], N['C#'], N2['F']],
        'D#M9': [N['D#'], N['G'], N['A#'], N2['D'], N2['F']],
        'D#maj9': [N['D#'], N['G'], N['A#'], N2['D'], N2['F']],
        'D#min9': [N['D#'], N['F#'], N['A#'], N2['C#'], N2['F']],
        'D#9#5': [N['D#'], N['G'], N['B'], N2['C#'], N2['F']],
        'D#9b5': [N['D#'], N['G'], N['A'], N2['C#'], N2['F']],
        'D#9aug': [N['D#'], N['G'], N['B'], N2['C#'], N2['F']],
        'D#11': [N['D#'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'D#M11': [N['D#'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'D#maj11': [N['D#'], N['G'], N['A#'], N2['D'], N2['F'], N2['G#']],
        'D#11aug': [N['D#'], N['G'], N['B'], N2['C#'], N2['F'], N2['G#']],
        'D#13': [N['D#'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['C']],
        'D#M13': [N['D#'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['C']],
        'D#maj13': [N['D#'], N['G'], N['A#'], N2['D#'], N2['F'], N2['G#'], N2['C']],
        'D#dim7': [N['D#'], N['F#'], N['A'], N2['C']],
        'D#dom7': [N['D#'], N['F#'], N['A#'], N2['C#']],
        'D#7b5': [N['D#'], N['G'], N['A'], N2['C#']],
        'D#7#5': [N['D#'], N['G'], N['B'], N2['C#']],
        'D#7b9': [N['D#'], N['G'], N['A#'], N2['C#'], N2['E']],
        'D#7#9': [N['D#'], N['G'], N['A#'], N2['C#'], N2['F#']],
        'D#min7b': [N['D#'], N['F#'], N['A#'], N2['C#']],
        'D#6sus4': [N['D#'], N['G#'], N['A#'], N2['C']],
        'D#7sus4': [N['D#'], N['G#'], N['A#'], N2['C#']],
        'D#9sus4': [N['D#'], N['G#'], N['A#'], N2['C#'], N2['F']],


        'Eb': [N['Eb'], N['G'], N['A#']],
        'EbM': [N['Eb'], N['G'], N['A#']],
        'Ebmaj': [N['Eb'], N['G'], N['A#']],
        'Ebmin': [N['Eb'], N['F#'], N['A#']],
        'Ebm': [N['Eb'], N['F#'], N['A#']],
        'Ebsus4': [N['Eb'], N['G#'], N['A#']],
        'Ebsus2': [N['Eb'], N['F'], N['A#']],
        'Ebaug': [N['Eb'], N['G'], N['B']],
        'Ebdim': [N['Eb'], N['F#'], N['A']],
        'EbM6': [N['Eb'], N['G'], N['A#'], N2['C']],
        'Ebmaj6': [N['Eb'], N['G'], N['A#'], N2['C']],
        'Ebmin6': [N['Eb'], N['F#'], N['A#'], N2['C']],
        'Ebmin7': [N['Eb'], N['F#'], N['A#'], N2['C#']],
        'Eb7': [N['Eb'], N['G'], N['A#'], N2['F']],
        'EbM7': [N['Eb'], N['G'], N['A#'], N2['F']],
        'Ebmaj7': [N['Eb'], N['G'], N['A#'], N2['F']],
        'Eb9': [N['Eb'], N['G'], N['A#'], N['C#'], N2['F']],
        'EbM9': [N['Eb'], N['G'], N['A#'], N2['D'], N2['F']],
        'Ebmaj9': [N['Eb'], N['G'], N['A#'], N2['D'], N2['F']],
        'Ebmin9': [N['Eb'], N['F#'], N['A#'], N2['C#'], N2['F']],
        'Eb9#5': [N['Eb'], N['G'], N['B'], N2['C#'], N2['F']],
        'Eb9b5': [N['Eb'], N['G'], N['A'], N2['C#'], N2['F']],
        'Eb9aug': [N['Eb'], N['G'], N['B'], N2['C#'], N2['F']],
        'Eb11': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'EbM11': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'Ebmaj11': [N['Eb'], N['G'], N['A#'], N2['D'], N2['F'], N2['G#']],
        'Eb11aug': [N['Eb'], N['G'], N['B'], N2['C#'], N2['F'], N2['G#']],
        'Eb13': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['C']],
        'EbM13': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['C']],
        'Ebmaj13': [N['Eb'], N['G'], N['A#'], N2['Eb'], N2['F'], N2['G#'], N2['C']],
        'Ebdim7': [N['Eb'], N['F#'], N['A'], N2['C']],
        'Ebdom7': [N['Eb'], N['F#'], N['A#'], N2['C#']],
        'Eb7b5': [N['Eb'], N['G'], N['A'], N2['C#']],
        'Eb7#5': [N['Eb'], N['G'], N['B'], N2['C#']],
        'Eb7b9': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['E']],
        'Eb7#9': [N['Eb'], N['G'], N['A#'], N2['C#'], N2['F#']],
        'Ebmin7b': [N['Eb'], N['F#'], N['A#'], N2['C#']],
        'Eb6sus4': [N['Eb'], N['G#'], N['A#'], N2['C']],
        'Eb7sus4': [N['Eb'], N['G#'], N['A#'], N2['C#']],
        'Eb9sus4': [N['Eb'], N['G#'], N['A#'], N2['C#'], N2['F']],

        'E': [N['E'], N['G#'], N['B']],
        'EM': [N['E'], N['G#'], N['B']],
        'Emaj': [N['E'], N['G#'], N['B']],
        'Emin': [N['E'], N['G'], N['B']],
        'Em': [N['E'], N['G'], N['B']],
        'Esus4': [N['E'], N['A'], N['B']],
        'Esus2': [N['E'], N['F#'], N['B']],
        'Eaug': [N['E'], N['G#'], N2['C']],
        'Edim': [N['E'], N['G'], N['Bb']],
        'EM6': [N['E'], N['G#'], N['B'], N['C#']],
        'Emaj6': [N['E'], N['G#'], N['B'], N['C#']],
        'Emin6': [N['E'], N['G'], N['B'], N2['C#']],
        'Emin7': [N['E'], N['G'], N['B'], N2['D']],
        'E7': [N['E'], N['G#'], N['B'], N2['D']],
        'EM7': [N['E'], N['G#'], N['B'], N2['D#']],
        'Emaj7': [N['E'], N['G#'], N['B'], N2['D#']],
        'E9': [N['E'], N['G#'], N['B'], N2['D'], N2['F#']],
        'EM9': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'Emaj9': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#']],
        'Emin9': [N['E'], N['G'], N['B'], N2['D'], N2['F#']],
        'E9#5': [N['E'], N['G#'], N2['C'], N2['D'], N2['F#']],
        'E9b5': [N['E'], N['G#'], N['B'], N2['D'], N2['F#']],
        'E9aug': [N['E'], N['G#'], N2['C'], N2['D'], N2['F#']],
        'E11': [N['E'], N['G#'], N['B'], N2['D'], N2['F#'], N2['A']],
        'EM11': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['A']],
        'Emaj11': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['A']],
        'E11aug': [N['E'], N['G#'], N['C'], N2['D'], N2['F#'], N2['A']],
        'E13': [N['E'], N['G#'], N['B'], N2['D'], N2['F#'], N2['A'], N3['C#']],
        'EM13': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#']],
        'Emaj13': [N['E'], N['G#'], N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#']],
        'Edim7': [N['E'], N['G'], N['Bb'], N2['C#']],
        'Edom7': [N['E'], N['G'], N['B'], N2['D']],
        'E7b5': [N['E'], N['G#'], N['Bb'], N2['D']],
        'E7#5': [N['E'], N['G#'], N['C'], N2['D']],
        'E7b9': [N['E'], N['G#'], N['B'], N2['D'], N2['F']],
        'E7#9': [N['E'], N['G#'], N['B'], N2['D'], N2['G']],
        'Em7b': [N['E'], N['G'], N['B'], N2['D']],
        'E6sus4': [N['E'], N['A'], N['B'], N2['C#']],
        'E7sus4': [N['E'], N['A'], N['B'], N2['D']],
        'E9sus4': [N['E'], N['A'], N['B'], N2['D'], N2['F#']],

        'F': [N['F'], N['A'], N2['C']],
        'FM': [N['F'], N['A'], N2['C']],
        'Fmaj': [N['F'], N['A'], N2['C']],
        'Fmin': [N['F'], N['F#'], N2['C']],
        'Fm': [N['F'], N['F#'], N2['C']],
        'Fsus4': [N['F'], N['A#'], N2['C']],
        'Fsus2': [N['F'], N['F'], N2['C']],
        'Faug': [N['F'], N['A'], N2['C#']],
        'Fdim': [N['F'], N['F#'], N2['B']],
        'FM6': [N['F'], N['A'], N2['C'], N2['D']],
        'Fmaj6': [N['F'], N['A'], N2['C'], N2['D']],
        'Fmin6': [N['F'], N['F#'], N2['C'], N2['D']],
        'Fmin7': [N['F'], N['F#'], N2['C'], N2['D#']],
        'F7': [N['F'], N['A'], N2['C'], N2['G']],
        'FM7': [N['F'], N['A'], N2['C'], N2['G']],
        'Fmaj7': [N['F'], N['A'], N2['C'], N2['G']],
        'F9': [N['F'], N['A'], N2['C'], N['D#'], N2['G']],
        'FM9': [N['F'], N['A'], N2['C'], N2['E'], N2['G']],
        'Fmaj9': [N['F'], N['A'], N2['C'], N2['E'], N2['G']],
        'Fmin9': [N['F'], N['F#'], N2['C'], N2['D#'], N2['G']],
        'F9#5': [N['F'], N['A'], N2['C#'], N2['D#'], N2['G']],
        'F9b5': [N['F'], N['A'], N['B'], N2['D#'], N2['G']],
        'F9aug': [N['F'], N['A'], N2['C#'], N2['D#'], N2['G']],
        'F11': [N['F'], N['A'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'FM11': [N['F'], N['A'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'Fmaj11': [N['F'], N['A'], N2['C'], N2['E'], N2['G'], N2['A#']],
        'F11aug': [N['F'], N['A'], N2['C#'], N2['D#'], N2['G'], N2['A#']],
        'F13': [N['F'], N['A'], N2['C'], N2['D#'], N2['G'], N2['A#'], N2['D']],
        'FM13': [N['F'], N['A'], N2['C'], N2['D#'], N2['G'], N2['A#'], N2['D']],
        'Fmaj13': [N['F'], N['A'], N2['C'], N2['F'], N2['G'], N2['A#'], N2['D']],
        'Fdim7': [N['F'], N['F#'], N['B'], N2['D']],
        'Fdom7': [N['F'], N['F#'], N2['C'], N2['D#']],
        'F7b5': [N['F'], N['A'], N['B'], N2['D#']],
        'F7#5': [N['F'], N['A'], N2['C#'], N2['D#']],
        'F7b9': [N['F'], N['A'], N2['C'], N2['D#'], N2['F#']],
        'F7#9': [N['F'], N['A'], N2['C'], N2['D#'], N2['G#']],
        'Fmin7b': [N['F'], N['F#'], N2['C'], N2['D#']],
        'F6sus4': [N['F'], N['A#'], N2['C'], N2['D']],
        'F7sus4': [N['F'], N['A#'], N2['C'], N2['D#']],
        'F9sus4': [N['F'], N['A#'], N2['C'], N2['D#'], N2['G']],

        'F#': [N['F#'], N['A#'], N2['C#']],
        'F#M': [N['F#'], N['A#'], N2['C#']],
        'F#maj': [N['F#'], N['A#'], N2['C#']],
        'F#min': [N['F#'], N['A'], N2['C#']],
        'F#m': [N['F#'], N['A'], N2['C#']],
        'F#sus4': [N['F#'], N['B'], N2['C#']],
        'F#sus2': [N['F#'], N['F#'], N2['C#']],
        'F#aug': [N['F#'], N['A#'], N2['D']],
        'F#dim': [N['F#'], N['A'], N2['C']],
        'F#M6': [N['F#'], N['A#'], N2['C#'], N['D#']],
        'F#maj6': [N['F#'], N['A#'], N2['C#'], N['D#']],
        'F#min6': [N['F#'], N['A'], N2['C#'], N2['D#']],
        'F#min7': [N['F#'], N['A'], N2['C#'], N2['E']],
        'F#7': [N['F#'], N['A#'], N2['C#'], N2['E']],
        'F#M7': [N['F#'], N['A#'], N2['C#'], N2['G']],
        'F#maj7': [N['F#'], N['A#'], N2['C#'], N2['G']],
        'F#9': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['G#']],
        'F#M9': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'F#maj9': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#']],
        'F#min9': [N['F#'], N['A'], N2['C#'], N2['E'], N2['G#']],
        'F#9#5': [N['F#'], N['A#'], N2['D'], N2['E'], N2['G#']],
        'F#9b5': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['G#']],
        'F#9aug': [N['F#'], N['A#'], N2['D'], N2['E'], N2['G#']],
        'F#11': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['G#'], N2['B']],
        'F#M11': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['B']],
        'F#maj11': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['B']],
        'F#11aug': [N['F#'], N['A#'], N2['D'], N2['E'], N2['G#'], N2['B']],
        'F#13': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['G#'], N2['B'], N3['D#']],
        'F#M13': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['B'], N3['D#']],
        'F#maj13': [N['F#'], N['A#'], N2['C#'], N2['F'], N2['G#'], N2['B'], N3['D#']],
        'F#dim7': [N['F#'], N['A'], N2['C'], N['D#']],
        'F#dom7': [N['F#'], N['A'], N2['C#'], N2['E']],
        'F#7b5': [N['F#'], N['A#'], N2['C'], N2['E']],
        'F#7#5': [N['F#'], N['A#'], N2['D'], N2['E']],
        'F#7b9': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['G']],
        'F#7#9': [N['F#'], N['A#'], N2['C#'], N2['E'], N2['A']],
        'F#min7b': [N['F#'], N['A'], N2['C#'], N2['E']],
        'F#6sus4': [N['F#'], N['B'], N2['C#'], N2['D#']],
        'F#7sus4': [N['F#'], N['B'], N2['C#'], N2['E']],
        'F#9sus4': [N['F#'], N['B'], N2['C#'], N2['E'], N2['G#']],

        'G': [N['G'], N['B'], N2['D']],
        'Gmaj': [N['G'], N['B'], N2['D']],
        'GM': [N['G'], N['B'], N2['D']],
        'Gmin': [N['G'], N['A#'], N2['D']],
        'Gm': [N['G'], N['A#'], N2['D']],
        'Gsus4': [N['G'], N2['C'], N2['D']],
        'Gsus2': [N['G'], N['A'], N2['D']],
        'Gaug': [N['G'], N['B'], N2['D#']],
        'Gdim': [N['G'], N['A#'], N2['C#']],
        'GM6': [N['G'], N['B'], N2['D'], N2['E']],
        'Gmaj6': [N['G'], N['B'], N2['D'], N2['E']],
        'Gmin6': [N['G'], N['A#'], N2['D'], N2['E']],
        'Gmin7': [N['G'], N['A#'], N2['D'], N2['F']],
        'G7': [N['G'], N['B'], N2['D'], N2['A']],
        'GM7': [N['G'], N['B'], N2['D'], N2['A']],
        'Gmaj7': [N['G'], N['B'], N2['D'], N2['A']],
        'G9': [N['G'], N['B'], N2['D'], N['F'], N2['A']],
        'GM9': [N['G'], N['B'], N2['D'], N2['F#'], N2['A']],
        'Gmaj9': [N['G'], N['B'], N2['D'], N2['F#'], N2['A']],
        'Gmin9': [N['G'], N['A#'], N2['D'], N2['F'], N2['A']],
        'G9#5': [N['G'], N['B'], N2['D#'], N2['F'], N2['A']],
        'G9b5': [N['G'], N['B'], N2['C#'], N2['F'], N2['A']],
        'G9aug': [N['G'], N['B'], N2['D#'], N2['F'], N2['A']],
        'G11': [N['G'], N['B'], N2['D'], N2['F'], N2['A'], N3['C']],
        'GM11': [N['G'], N['B'], N2['D'], N2['F'], N2['A'], N3['C']],
        'Gmaj11': [N['G'], N['B'], N2['D'], N2['F#'], N2['A'], N3['C']],
        'G11aug': [N['G'], N['B'], N2['D#'], N2['F'], N2['A'], N3['C']],
        'G13': [N['G'], N['B'], N2['D'], N2['F'], N2['A'], N3['C'], N3['E']],
        'GM13': [N['G'], N['B'], N2['D'], N2['F'], N2['A'], N3['C'], N3['E']],
        'Gmaj13': [N['G'], N['B'], N2['D'], N2['F#'], N2['A'], N3['C'], N3['E']],
        'Gdim7': [N['G'], N['A#'], N2['C#'], N2['E']],
        'Gdom7': [N['G'], N['A#'], N2['D'], N2['F']],
        'G7b5': [N['G'], N['B'], N2['C#'], N2['F']],
        'G7#5': [N['G'], N['B'], N2['D#'], N2['F']],
        'G7b9': [N['G'], N['B'], N2['D'], N2['F'], N2['A#']],
        'G7#9': [N['G'], N['B'], N2['D'], N2['F'], N2['A#']],
        'Gmin7b': [N['G'], N['A#'], N2['D'], N2['F']],
        'G6sus4': [N['G'], N2['C'], N2['D'], N2['E']],
        'G7sus4': [N['G'], N2['C'], N2['D'], N2['F']],
        'G9sus4': [N['G'], N2['C'], N2['D'], N2['F'], N2['G']],

        'G#': [N['G#'], N2['C'], N2['D#']],
        'G#M': [N['G#'], N2['C'], N2['D#']],
        'G#maj': [N['G#'], N2['C'], N2['D#']],
        'G#min': [N['G#'], N['B'], N2['D#']],
        'G#m': [N['G#'], N['B'], N2['D#']],
        'G#sus4': [N['G#'], N2['C#'], N2['D#']],
        'G#sus2': [N['G#'], N['A#'], N2['D#']],
        'G#aug': [N['G#'], N2['C'], N2['E']],
        'G#dim': [N['G#'], N['B'], N2['D']],
        'G#M6': [N['G#'], N2['C'], N2['D#'], N2['F']],
        'G#maj6': [N['G#'], N2['C'], N2['D#'], N2['F']],
        'G#min6': [N['G#'], N['B'], N2['D#'], N2['F']],
        'G#min7': [N['G#'], N['B'], N2['D#'], N2['F#']],
        'G#7': [N['G#'], N2['C'], N2['D#'], N2['F#']],
        'G#M7': [N['G#'], N2['C'], N2['D#'], N2['G']],
        'G#maj7': [N['G#'], N2['C'], N2['D#'], N2['G']],
        'G#9': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['A#']],
        'G#M9': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'G#maj9': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'G#min9': [N['G#'], N['B'], N2['D#'], N2['F#'], N2['A#']],
        'G#9#5': [N['G#'], N2['C'], N2['E'], N2['F#'], N2['A#']],
        'G#9b5': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['A#']],
        'G#9aug': [N['G#'], N2['C'], N2['E'], N2['F#'], N2['A#']],
        'G#11': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['A#'], N3['C#']],
        'G#M11': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#']],
        'G#maj11': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#']],
        'G#11aug': [N['G#'], N2['C'], N2['E'], N2['F#'], N2['A#'], N3['C#']],
        'G#13': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['A#'], N3['C#'], N3['F']],
        'G#M13': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#'], N3['F']],
        'G#maj13': [N['G#'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#'], N3['F']],
        'G#dim7': [N['G#'], N['B'], N2['D'], N2['F']],
        'G#dom7': [N['G#'], N['B'], N2['D#'], N2['F#']],
        'G#7b5': [N['G#'], N2['C'], N2['D'], N2['F#']],
        'G#7#5': [N['G#'], N2['C'], N2['E'], N2['F#']],
        'G#7b9': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['A']],
        'G#7#9': [N['G#'], N2['C'], N2['D#'], N2['F#'], N2['B']],
        'G#min7b': [N['G#'], N2['B'], N2['D#'], N2['F#']],
        'G#6sus4': [N['G#'], N2['C#'], N2['D#'], N2['F']],
        'G#7sus4': [N['G#'], N2['C#'], N2['D#'], N2['F#']],
        'G#9sus4': [N['G#'], N2['C#'], N2['D#'], N2['F#'], N2['A#']],

        'Ab': [N['Ab'], N2['C'], N2['D#']],
        'AbM': [N['Ab'], N2['C'], N2['D#']],
        'Abmaj': [N['Ab'], N2['C'], N2['D#']],
        'Abmin': [N['Ab'], N['B'], N2['D#']],
        'Abm': [N['Ab'], N['B'], N2['D#']],
        'Absus4': [N['Ab'], N2['C#'], N2['D#']],
        'Absus2': [N['Ab'], N['A#'], N2['D#']],
        'Abaug': [N['Ab'], N2['C'], N2['E']],
        'Abdim': [N['Ab'], N['B'], N2['D']],
        'AbM6': [N['Ab'], N2['C'], N2['D#'], N2['F']],
        'Abmaj6': [N['Ab'], N2['C'], N2['D#'], N2['F']],
        'Abmin6': [N['Ab'], N['B'], N2['D#'], N2['F']],
        'Abmin7': [N['Ab'], N['B'], N2['D#'], N2['F#']],
        'Ab7': [N['Ab'], N2['C'], N2['D#'], N2['F#']],
        'AbM7': [N['Ab'], N2['C'], N2['D#'], N2['G']],
        'Abmaj7': [N['Ab'], N2['C'], N2['D#'], N2['G']],
        'Ab9': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['A#']],
        'AbM9': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'Abmaj9': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#']],
        'Abmin9': [N['Ab'], N['B'], N2['D#'], N2['F#'], N2['A#']],
        'Ab9#5': [N['Ab'], N2['C'], N2['E'], N2['F#'], N2['A#']],
        'Ab9b5': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['A#']],
        'Ab9aug': [N['Ab'], N2['C'], N2['E'], N2['F#'], N2['A#']],
        'Ab11': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['A#'], N3['C#']],
        'AbM11': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#']],
        'Abmaj11': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#']],
        'Ab11aug': [N['Ab'], N2['C'], N2['E'], N2['F#'], N2['A#'], N3['C#']],
        'Ab13': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['A#'], N3['C#'], N3['F']],
        'AbM13': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#'], N3['F']],
        'Abmaj13': [N['Ab'], N2['C'], N2['D#'], N2['G'], N2['A#'], N3['C#'], N3['F']],
        'Abdim7': [N['Ab'], N['B'], N2['D'], N['F']],
        'Abdom7': [N['Ab'], N['B'], N2['D#'], N2['F#']],
        'Ab7b5': [N['Ab'], N2['C'], N2['D'], N2['F#']],
        'Ab7#5': [N['Ab'], N2['C'], N2['E'], N2['F#']],
        'Ab7b9': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['A']],
        'Ab7#9': [N['Ab'], N2['C'], N2['D#'], N2['F#'], N2['B']],
        'Abmin7b': [N['Ab'], N2['B'], N2['D#'], N2['F#']],
        'Ab6sus4': [N['Ab'], N2['C#'], N2['D#'], N2['F']],
        'Ab7sus4': [N['Ab'], N2['C#'], N2['D#'], N2['F#']],
        'Ab9sus4': [N['Ab'], N2['C#'], N2['D#'], N2['F#'], N2['A#']],

        'A': [N['A'], N2['C#'], N2['E']],
        'AM': [N['A'], N2['C#'], N2['E']],
        'Amaj': [N['A'], N2['C#'], N2['E']],
        'Amin': [N['A'], N2['C'], N2['E']],
        'Am': [N['A'], N2['C'], N2['E']],
        'Asus4': [N['A'], N2['D'], N2['E']],
        'Asus2': [N['A'], N['B'], N2['E']],
        'Aaug': [N['A'], N2['C#'], N2['F']],
        'Adim': [N['A'], N2['C'], N2['D#']],
        'AM6': [N['A'], N2['C#'], N2['E'], N2['F#']],
        'Amaj6': [N['A'], N2['C#'], N2['E'], N2['F#']],
        'Amin6': [N['A'], N2['C'], N2['E'], N2['F#']],
        'Amin7': [N['A'], N2['C'], N2['E'], N2['G']],
        'A7': [N['A'], N2['C#'], N2['E'], N2['A']],
        'AM7': [N['A'], N2['C#'], N2['E'], N2['Ab']],
        'Amaj7': [N['A'], N2['C#'], N2['E'], N2['Ab']],
        'A9': [N['A'], N2['C#'], N2['E'], N['G'], N2['B']],
        'AM9': [N['A'], N2['C#'], N2['E'], N2['G#'], N2['B']],
        'Amaj9': [N['A'], N2['C#'], N2['E'], N2['G#'], N2['B']],
        'Amin9': [N['A'], N2['C'], N2['E'], N2['G'], N2['B']],
        'A9#5': [N['A'], N2['C#'], N2['F'], N2['G'], N2['B']],
        'A9b5': [N['A'], N2['C#'], N2['D#'], N2['G'], N2['B']],
        'A9aug': [N['A'], N2['C#'], N2['F'], N2['G'], N2['B']],
        'A11': [N['A'], N2['C#'], N2['E'], N2['G'], N2['B'], N3['D']],
        'AM11': [N['A'], N2['C#'], N2['E'], N2['G'], N2['B'], N3['D']],
        'Amaj11': [N['A'], N2['C#'], N2['E'], N2['G#'], N2['B'], N3['D']],
        'A11aug': [N['A'], N2['C#'], N2['F'], N2['G'], N2['B'], N3['D']],
        'A13': [N['A'], N2['C#'], N2['E'], N2['G'], N2['B'], N3['D'], N3['F#']],
        'AM13': [N['A'], N2['C#'], N2['E'], N2['G'], N2['B'], N3['D'], N3['F#']],
        'Amaj13': [N['A'], N2['C#'], N2['E'], N2['G#'], N2['B'], N3['D'], N3['F#']],
        'Adim7': [N['A'], N2['C'], N2['D#'], N2['F#']],
        'Adom7': [N['A'], N2['C'], N2['E'], N2['G']],
        'A7b5': [N['A'], N2['C#'], N2['D#'], N2['G']],
        'A7#5': [N['A'], N2['C#'], N2['F'], N2['G']],
        'A7b9': [N['A'], N2['C#'], N2['E'], N2['G'], N3['C']],
        'A7#9': [N['A'], N2['C#'], N2['E'], N2['G'], N3['C']],
        'Amin7b': [N['A'], N['C'], N2['E'], N2['G']],
        'A6sus4': [N['A'], N2['D'], N2['E'], N2['F#']],
        'A7sus4': [N['A'], N2['D'], N2['E'], N2['G']],
        'A9sus4': [N['A'], N2['D'], N2['E'], N2['G'], N2['B']],

        'A#': [N['A#'], N2['D'], N2['F']],
        'A#M': [N['A#'], N2['D'], N2['F']],
        'A#maj': [N['A#'], N2['D'], N2['F']],
        'A#min': [N['A#'], N2['C#'], N2['F']],
        'A#m': [N['A#'], N2['C#'], N2['F']],
        'A#sus4': [N['A#'], N2['D#'], N2['F']],
        'A#sus2': [N['A#'], N2['C'], N2['F']],
        'A#aug': [N['A#'], N2['D'], N2['F#']],
        'A#dim': [N['A#'], N2['C#'], N2['E']],
        'A#M6': [N['A#'], N2['D'], N2['F'], N2['G']],
        'A#maj6': [N['A#'], N2['D'], N2['F'], N2['G']],
        'A#min6': [N['A#'], N2['C#'], N2['F'], N2['G']],
        'A#min7': [N['A#'], N2['C#'], N2['F'], N2['G#']],
        'A#7': [N['A#'], N2['D'], N2['F'], N2['G#']],
        'A#M7': [N['A#'], N2['D'], N2['F'], N2['A']],
        'A#maj7': [N['A#'], N2['D'], N2['F'], N2['A']],
        'A#9': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C']],
        'A#M9': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C']],
        'A#maj9': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C']],
        'A#min9': [N['A#'], N['C#'], N2['F'], N2['G#'], N3['C']],
        'A#9#5': [N['A#'], N2['D'], N2['F#'], N2['G#'], N3['C']],
        'A#9b5': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C']],
        'A#9aug': [N['A#'], N2['D'], N2['F#'], N2['G#'], N3['C']],
        'A#11': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C'], N3['D#']],
        'A#M11': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#']],
        'A#maj11': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#']],
        'A#11aug': [N['A#'], N2['D'], N2['F#'], N2['G#'], N3['C'], N3['D#']],
        'A#13': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C'], N3['D#'], N3['F']],
        'A#M13': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#'], N3['F']],
        'A#maj13': [N['A#'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#'], N3['F']],
        'A#dim7': [N['A#'], N2['C#'], N2['E'], N2['G']],
        'A#dom7': [N['A#'], N2['C#'], N2['F'], N2['G#']],
        'A#7b5': [N['A#'], N2['D'], N2['E'], N2['G#']],
        'A#7#5': [N['A#'], N2['D'], N2['F#'], N2['G#']],
        'A#7b9': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C#']],
        'A#7#9': [N['A#'], N2['D'], N2['F'], N2['G#'], N3['C#']],
        'A#min7b': [N['A#'], N2['C'], N2['F'], N2['G#']],
        'A#6sus4': [N['A#'], N2['D#'], N2['F'], N2['G']],
        'A#7sus4': [N['A#'], N2['D#'], N2['F'], N2['G#']],
        'A#9sus4': [N['A#'], N2['D#'], N2['F'], N2['G#'], N3['C']],

        'Bb': [N['Bb'], N2['D'], N2['F']],
        'BbM': [N['Bb'], N2['D'], N2['F']],
        'Bbmaj': [N['Bb'], N2['D'], N2['F']],
        'Bbmin': [N['Bb'], N2['C#'], N2['F']],
        'Bbm': [N['Bb'], N2['C#'], N2['F']],
        'Bbsus4': [N['Bb'], N2['D#'], N2['F']],
        'Bbsus2': [N['Bb'], N2['C'], N2['F']],
        'Bbaug': [N['Bb'], N2['D'], N2['F#']],
        'Bbdim': [N['Bb'], N2['C#'], N2['E']],
        'BbM6': [N['Bb'], N2['D'], N2['F'], N2['G']],
        'Bbmaj6': [N['Bb'], N2['D'], N2['F'], N2['G']],
        'Bbmin6': [N['Bb'], N2['C#'], N2['F'], N2['G']],
        'Bbmin7': [N['Bb'], N2['C#'], N2['F'], N2['G#']],
        'Bb7': [N['Bb'], N2['D'], N2['F'], N2['G#']],
        'BbM7': [N['Bb'], N2['D'], N2['F'], N2['A']],
        'Bbmaj7': [N['Bb'], N2['D'], N2['F'], N2['A']],
        'Bb9': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C']],
        'BbM9': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C']],
        'Bbmaj9': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C']],
        'Bbmin9': [N['Bb'], N['C#'], N2['F'], N2['G#'], N3['C']],
        'Bb9#5': [N['Bb'], N2['D'], N2['F#'], N2['G#'], N3['C']],
        'Bb9b5': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C']],
        'Bb9aug': [N['Bb'], N2['D'], N2['F#'], N2['G#'], N3['C']],
        'Bb11': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C'], N3['D#']],
        'BbM11': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#']],
        'Bbmaj11': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#']],
        'Bb11aug': [N['Bb'], N2['D'], N2['F#'], N2['G#'], N3['C'], N3['D#']],
        'Bb13': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C'], N3['D#'], N3['F']],
        'BbM13': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#'], N3['F']],
        'Bbmaj13': [N['Bb'], N2['D'], N2['F'], N2['A'], N3['C'], N3['D#'], N3['F']],
        'Bbdim7': [N['Bb'], N2['C#'], N2['E'], N2['G']],
        'Bbdom7': [N['Bb'], N2['C#'], N2['F'], N2['G#']],
        'Bb7b5': [N['Bb'], N2['D'], N2['E'], N2['G#']],
        'Bb7#5': [N['Bb'], N2['D'], N2['F#'], N2['G#']],
        'Bb7b9': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C#']],
        'Bb7#9': [N['Bb'], N2['D'], N2['F'], N2['G#'], N3['C#']],
        'Bbmin7b': [N['Bb'], N2['C'], N2['F'], N2['G#']],
        'Bb6sus4': [N['Bb'], N2['D#'], N2['F'], N2['G']],
        'Bb7sus4': [N['Bb'], N2['D#'], N2['F'], N2['G#']],
        'Bb9sus4': [N['Bb'], N2['D#'], N2['F'], N2['G#'], N3['C']],

        'B': [N['B'], N2['D#'], N2['F#']],
        'BM': [N['B'], N2['D#'], N2['F#']],
        'Bmaj': [N['B'], N2['D#'], N2['F#']],
        'Bmin': [N['B'], N2['D'], N2['F#']],
        'Bm': [N['B'], N2['D'], N2['F#']],
        'Bsus4': [N['B'], N2['E'], N2['F#']],
        'Bsus2': [N['B'], N2['C#'], N2['F#']],
        'Baug': [N['B'], N2['D#'], N2['G']],
        'Bdim': [N['B'], N2['D'], N2['F']],
        'BM6': [N['B'], N2['D#'], N2['F#'], N2['Ab']],
        'Bmaj6': [N['B'], N2['D#'], N2['F#'], N2['Ab']],
        'Bmin6': [N['B'], N2['D'], N2['F#'], N2['Ab']],
        'Bmin7': [N['B'], N2['D'], N2['F#'], N2['Bb']],
        'B7': [N['B'], N2['D#'], N2['F#'], N2['B']],
        'BM7': [N['B'], N2['D#'], N2['F#'], N2['B']],
        'Bmaj7': [N['B'], N2['D#'], N['F#'], N2['B']],
        'B9': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#']],
        'BM9': [N['B'], N2['D#'], N2['F#'], N2['B'], N3['C#']],
        'Bmaj9': [N['B'], N2['D#'], N2['F#'], N2['B'], N3['C#']],
        'Bmin9': [N['B'], N2['D'], N2['F#'], N2['A'], N3['C#']],
        'B9#5': [N['B'], N2['D#'], N2['G'], N2['A'], N3['C#']],
        'B9b5': [N['B'], N2['D#'], N2['F'], N2['A'], N3['C#']],
        'B9aug': [N['B'], N2['D#'], N2['G'], N2['A'], N3['C#']],
        'B11': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#'], N3['E']],
        'BM11': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#'], N3['E']],
        'Bmaj11': [N['B'], N2['D#'], N2['F#'], N2['Bb'], N3['C#'], N3['E']],
        'B11aug': [N['B'], N2['D#'], N2['G'], N2['A'], N3['C#'], N3['E']],
        'B13': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#'], N3['E'], N3['Ab']],
        'BM13': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C#'], N3['E'], N3['Ab']],
        'Bmaj13': [N['B'], N2['D#'], N2['F#'], N2['B'], N3['C#'], N3['E'], N3['Ab']],
        'Bdim7': [N['B'], N2['D'], N2['F'], N2['Ab']],
        'Bdom7': [N['B'], N2['D'], N2['F#'], N2['A']],
        'B7b5': [N['B'], N2['D#'], N['F'], N2['A']],
        'B7#5': [N['B'], N2['D#'], N2['G'], N2['A']],
        'B7b9': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['C']],
        'B7#9': [N['B'], N2['D#'], N2['F#'], N2['A'], N3['D']],
        'Bmin7b': [N['B'], N2['D'], N2['F#'], N2['A']],
        'B6sus4': [N['B'], N2['E'], N2['F#'], N2['Ab']],
        'B7sus4': [N['B'], N2['E'], N2['F#'], N2['A']],
        'B9sus4': [N['B'], N2['E'], N2['F#'], N2['A'], N3['C#']],

        // , A,

    }

}
