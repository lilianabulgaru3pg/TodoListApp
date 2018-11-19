import 'whatwg-fetch'

class RequestManager {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async postData(data) {
        try {
            console.log('data', data);
            var response = await fetch(`${this.baseUrl}/user-tasks`, {
                method: 'POST',
                body: data
            });
            console.log("response", response)
            if (response.status === 200) {
                let responseJSON = this.getJSON(response);
                return responseJSON;
            }

            if (response.status >= 200) {
                throw Error('Error:', response.status)
            }

        } catch (err) {
            throw Error(err);
        }
    }

    async getJSON(response) {
        try {
            console.log("response", response)
            const responseBody = await response.json();
            return responseBody;
        } catch (err) {
            throw Error(err)
        }
    }
}

export default new RequestManager('http://localhost:3000');
