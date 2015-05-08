import RemoteBC from './remote';
import $ from 'jquery';

export default class RemoteProduct extends RemoteBC
{
    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.endPoint = '/product/';
    }

    /**
     *
     * @param productId
     * @param params
     * @param callback
     */
    getById(productId, params, callback)
    {
        let url = this.endPoint + productId;

        if (typeof params === 'function') {
            callback = params;
            params = {};
        }

        this.makeRequest(url, 'GET', params, callback);
    }
}