'use strict';
import IE from './ie.js';
import Helper from '../helper.js';
//09-11-2022
export default class Checkbox extends IE {
    draw() {
        super.draw();

        Helper.ajax(null, {}, template => {
            let terms = this.visor.sd.demo_taxonomies_terms;
            let block = this.assemble_terms(terms, template);

            this.container.insertAdjacentHTML('afterbegin', block);
            if (this.container.querySelectorAll('input')) {
                this.container.querySelectorAll('input')[0].setAttribute('checked', true);//for visual test
            }

            this.container.className = `woof_list_checkbox_sd_${this.template_num}`;
            this.wrapper.appendChild(this.container);
        }, false, this.template_url);

    }
}
