import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./aoc-widget-day";

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

  static styles = css`
    section {
      width: 130px;
      font-family: JetBrains Mono, monospace;
      padding: 15px 35px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h4 {
      display: block;
    }
  `;

  render() {
    return html`<section>
      <h4>${this.language}</h4>
      ${adventDays.map((day) => {
        return html`<aoc-widget-day
          data=${JSON.stringify(this.data[day])}
          day=${day}
        ></aoc-widget-day>`;
      })}
    </section>`;
  }
}
