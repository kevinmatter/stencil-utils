import Hooks from '../hooks';
import Base from './base';

export default class extends Base
{
    /**
     * @Constructor
     */
    constructor(version) {
        // call parent
        super(version);

        // set up class variables
        this.endpoint = '/search.php?search_query=';
    }

    /**
     * Get search results
     * @param {String} query
     * @param {Object} params
     * @param {Function} callback
     */
    search(query, ktype, params, callback) {
        let url = this.endpoint + encodeURIComponent(query);
        if ( ktype != null ) {
          url = url + ktype;
        }
        let paramsArg = params;
        let callbackArg = callback;

        if (typeof paramsArg === 'function') {
            callbackArg = paramsArg;
            paramsArg = {};
        }

        Hooks.emit('search-quick-remote', query);
        this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
    }
}
