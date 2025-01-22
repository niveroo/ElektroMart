
class API {
    static token = ``
    static baseURL = ``

    static {
        this.baseURL = this.baseURL.replace(/\/+$/, '')
    }

    static async request(methods, route, body) {
        const response = await fetch(this.baseURL + route, {
            method,
            headers: {
                'Accept': 'application/json',  // Accept JSON response
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            return rejectWithValue('Network response was not ok');
        }

        return response.json()
    }

    static async getProductById(id) {
        return this.request('GET', `${this.token}/api/products/${id}`)
    }

    static async getProducts(filters) {
        return this.request('GET', `${this.token}/api/products`, { filters })
    }
}

export default API 