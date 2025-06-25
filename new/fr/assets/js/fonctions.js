const apiBaseURL = "https://inawoapiv3.inawo.pro"
const handleCreate = async (data, url=apiBaseURL) => {
    alert("try to send")
    try {
        const response = await axios.post(`${url}/utilisateurs/createuser/`, data)
        return response.data
    } catch (error) {
        alert("Echec de la requête")
        console.error({error})
        throw error;
    }
}
const handleActivate = async (token, url=apiBaseURL) => {
    try {
        const response = await axios.get(`${url}/utilisateurs/activationutilisateur/${token}/`)
        if(response){
            return true
        }
        console.log("activation")
    } catch (error) {
        console.error({error})
        throw error
    }
}
