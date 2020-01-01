'use strict';

class FormHandler {
    constructor() {
        this.form = document.querySelector('#create-placeholder');
        this.width = document.querySelector('#width');
        this.height = document.querySelector('#height');

        this.send();
    }

    send() {
        this.form.addEventListener('submit', async e => {
            e.preventDefault();
            this.clearForm();

            const errors = this.validateForm();

            if(errors.length > 0) {
                for(let err of errors) {
                    this.handleError(err, this.form);
                }
            } else {

                const url = `/placeholder/${this.width.value}/${this.height.value}`;
                window.location = url;

            }
        });
    }

    handleError(objErr, target) {
        const element = document.createElement('div');
        element.className = 'alert alert-danger mt-4';
        element.innerHTML = objErr.error; 
        target.appendChild(element);
    }

    clearForm() {
        const alerts = this.form.querySelectorAll('.alert');
        if(alerts.length > 0) {
            alerts.forEach(el => {
                this.form.removeChild(el);
            });
        }
    }

    validateForm() {
        const errors = [];
        if(!validator.isInt(this.width.value)) {
            errors.push( { error: 'Invalid width value.' } );
        }
        if(!validator.isInt(this.height.value)) {
            errors.push( { error: 'Invalid height value.' } );
        }
        return errors;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = new FormHandler();
});