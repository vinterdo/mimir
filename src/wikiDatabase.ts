class WikiDatabase {
    entries: {
        [id: string] : IWikiEntry
    }
}

interface IWikiEntry {
    name: string,
    text: string,
    sections: {
        [id: string] : IWikiSection
    }
}

interface IWikiSection {
    name: string,
    text: string,
    subSection: {
        [id: string] : IWikiSubsection
    }
}

interface IWikiSubsection {
    name: string
    text: string
}