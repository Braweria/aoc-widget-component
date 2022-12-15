import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./aoc-widget-language";

type AocDataYear = {
  [language: string]: {
    [day: string]: {
      url: string;
    };
  };
};

@customElement("aoc-widget-year")
export class AocWidget extends LitElement {
  @property({ type: Object })
  data: AocDataYear = {};
  @property({ type: Number })
  year = 0;

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
  }

  render() {
    const languages = Object.keys(this.data).sort();
    return html`<h1>${this.year}</h1>
      ${languages.map((language) => {
        return html`<aoc-widget-language
          language=${language}
          data=${JSON.stringify(this.data[language])}
        ></aoc-widget-language>`;
      })}`;
  }
}
