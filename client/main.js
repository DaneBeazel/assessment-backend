const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortuneButton')

const postBtn = document.getElementById('postButton')

const postInput = document.getElementById('postInput')

const deleteBtn = document.getElementById('deleteButton')

const deleteInput = document.getElementById('deleteInput')

const updateBtn = document.getElementById('updateButton')

const updatedFortuneInput = document.getElementById('updatedFortune')

const fortuneIdInput = document.getElementById('fortuneIndex')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data
            alert(data)
        })
}

fortuneBtn.addEventListener('click', getFortune)


const addFortune = () => {
    const fortunesObj = {
        newFortune: postInput.value
    }
    axios.post('http://localhost:4000/api/post', fortunesObj)
        .then((res) => {
            console.log(res.data)
        })
}

postBtn.addEventListener('click', addFortune)


const deleteFortune = () => {
    axios.delete(`http://localhost:4000/api/delete/:id`)
        .then(res => res.data)
}

deleteBtn.addEventListener('click', deleteFortune)


const updateFortune = () => {
    const updatedObj = {
        index: fortuneIdInput.value,
        changedFortune: updatedFortuneInput.value
    }

    axios.put(`http://localhost:4000/api/put/:id`, updatedObj)
        .then(res => res.data)
        console.log(res.data)
}

updateBtn.addEventListener('click', updateFortune)