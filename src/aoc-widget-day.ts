import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

type AocDataDay = {
  url: string;
};

@customElement("aoc-widget-day")
export class AocWidget extends LitElement {
  @property({ type: Object })
  data: AocDataDay = { url: "" };
  @property({ type: Number })
  day = 0;

  static styles = css`
    .day {
      display: flex;
      gap: 4px;
      align-items: center;

      margin: 0;
      padding: 4px 12px;

      font-size: 1rem;
      font-family: JetBrains Mono, monospace;
      font-weight: bold;
      color: black;
    }
    .solved {
      background-color: hsla(240, 40%, 70%, 0.2);
      text-decoration: none;
    }
    .solved:hover {
      background-color: hsla(240, 40%, 70%, 0.5);
    }
    .day-number {
      flex: 1;
      display: block;
    }

    .day-stars {
      flex: 1;
      display: block;
    }
  `;

  render() {
    if (this.data) {
      return html`<a href=${this.data.url} class="day solved"
        ><span class="day-number">${String(this.day).padStart(2, "0")}</span
        ><span class="day-stars">**</span></a
      >`;
    }

    console.log("hello");

    // if (this.data.url !== undefined) {
    //   return html`<h1>${this.url}</h1>`;
    // }

    return html`<p class="day">
      <span class="day-number">${String(this.day).padStart(2, "0")}</span
      ><span class="day-stars"></span>
    </p>`;
  }
}
