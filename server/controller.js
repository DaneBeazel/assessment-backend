
const fortunes = ['A lifetime of happiness lies ahead of you.', 'A pleasant surprise is waiting for you.', 'Adventure can be real happiness.', 'All your hard work will soon pay off.', 'At the touch of love, everyone becomes a poet.']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
    
        console.log(req.body)
    
        fortunes.push(req.body.newFortune)
   
        res.status(200).send(fortunes[fortunes.length - 1])
        console.log(fortunes)
    },

    deleteFortune: (req, res) => {
        const existingId = +req.body.id
        const index = fortunes.findIndex(fortune => fortune.id === existingId)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
        console.log(fortunes)
    },

   updateFortune: (req, res) => {
        let id = fortuneIdInput.value
        res.status(200).send(fortunes)
   }
   

}