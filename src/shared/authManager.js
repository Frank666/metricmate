export default class AuthManager {

    static myInstance = null;

    _token = "";
    _refreshToken = "";
    _isValid = true;
    _history = "";

    /**
     * @returns {AuthManager}
     */
    static getInstance() {
        if (AuthManager.myInstance == null) {
            AuthManager.myInstance = new AuthManager();
        }

        return this.myInstance;
    }

    getToken() {
        return this._token;
    }

    setToken(tokenValue) {
        this._token = tokenValue;
    }

    getRefreshToken() {
        return this._refreshToken;
    }

    setRefreshToken(refreshValue) {
        this._refreshToken = refreshValue;
    }

    getIsValid() {
        return this._isValid;
    }

    setIsValid(isValidValue) {
        this._isValid = isValidValue;
    }

    getHistory() {
        return this._history;
    }

    setHistory(historyValue) {
        this._history = historyValue;
    }
}