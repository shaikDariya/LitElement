import { customElement, LitElement, html } from "lit-element";

@customElement('my-title')
export class MyTitle extends LitElement{
    protected render(){
        return html`<div>Hello Lit </div>`
    }
}