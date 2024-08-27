class Vocabulary {
    private _words: string[] = [];
    protected _language: string = 'English';

    constructor(initialWords: string[] = [], initialLanguage: string = 'English') {
        this._words = initialWords;
        this._language = initialLanguage;
    }


    addWord(word: string): void {
        if (word.length > 0 && !this._words.includes(word)) {
            this._words.push(word)

        }
    }

    displayAll(): void {
        console.log(`language: ${this._language}`)
        console.log(`adding word ${this._words.join(', ')}`);
    }



}

export default Vocabulary

