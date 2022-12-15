import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

type AocDataLanguage = {
  [day: string]: {
    url: string;
  };
};

const adventDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

@customElement("aoc-widget-language")
export class AocWidget extends LitElement {
  @property({ type: Object })
  data: AocDataLanguage = {};
  @property({ type: String })
  language = "";

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
  }

  render() {
    const days = Object.keys(this.data).sort();
    return html`<h1>${this.language}</h1>
      ${adventDays.map((day) => {
        return html`${day}`;
      })}`;
  }
}
