import BaseHooks from './base';
import $ from 'jquery';

export default class extends BaseHooks {

    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.showNumEvents();
    }

    showNumEvents() {
        this.$body.on('submit', '[data-show-num]', (event) => {
            this.emit('showNum-submitted', event);
        });

        this.$body.on('change', '[data-show-num] select', (event) => {
            this.emit('showNum-select-changed', event);

            if (! event.isDefaultPrevented()) {
                $(event.currentTarget).closest('form').trigger('submit');
            }
        });
    }
}
