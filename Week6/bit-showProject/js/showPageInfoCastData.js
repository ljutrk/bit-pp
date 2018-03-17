var castDataModule = (function () {
    // console.log("showPageInfoData - Cast log!");

    class Cast {
        constructor(person, character) {
            this.person = person;
            this.character = character;
        }
    }

    const createCast = (response) => {
        
        return response.map(cast => {
            const { person, character } = cast;
            return new Cast(person, character)
        })
    }


    return {
        createCast
    }

})();