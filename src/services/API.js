class API {
    static baseURL = 'https://wvdq7l1l-7046.euw.devtunnels.ms';

    static {
        this.baseURL = this.baseURL.replace(/\/+$/, '');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static clearToken() {
        localStorage.removeItem('token');
    }

    static async request(method, route, body) {
        const headers = {
            'Accept': 'application/json',
        };

        if (body) {
            headers['Content-Type'] = 'application/json';
        }

        const token = this.getToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(this.baseURL + route, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }

    static async getProductById(id) {
        return this.request('GET', `/api/ProductsApi/${id}`);
    }

    static async getProducts() {
        return this.request('GET', `/api/ProductsApi`);
    }

    static async login(email, password, rememberMe) {
        return this.request('POST', '/api/AccountApi/login', { email, password, rememberMe, });
    }

    static async getUserData() {
        return this.request('GET', '/api/AccountApi/userdata')
    }

    static async logout() {
        return this.request('POST', '/api/AccountApi/logout');
    }

    static async register(email, password, confirmPassword) {
        return this.request('POST', '/api/AccountApi/register', { email, password, confirmPassword });
    }

    static async addToCart(productId, quantity) {
        const requestBody = { productId, quantity };
        const response = await this.request('POST', '/api/CartApi/AddToCart', requestBody);
        return response;
    }

    static async getCart() {
        return this.request('GET', '/api/CartApi/GetCart');
    }

    static async deleteFromCart(productId) {
        return this.request('DELETE', '/api/CartApi/RemoveFromCartByProductId', { productId });
    }

    static async createOrder(shippingAddress) {
        return this.request('POST', '/api/OrderApi/CreateOrder', { shippingAddress });
    }
}

export default API;
