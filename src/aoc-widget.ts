import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./aoc-widget-year";

type AocData = {
  [year: string]: {
    [language: string]: {
      [day: string]: {
        url: string;
      };
    };
  };
};

// https://raw.githubusercontent.com/Braweria/aoc-widget-data-generator/main/aoc-data.json

@customElement("aoc-widget")
export class AocWidget extends LitElement {
  @property()
  data: AocData = {};

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    const response = await fetch(
      "https://raw.githubusercontent.com/Braweria/aoc-widget-data-generator/main/aoc-data.json"
    );
    this.data = await response.json();
  }

  render() {
    const years = Object.keys(this.data).sort();
    return html`${years.map(
      (year) =>
        html`<aoc-widget-year year=${year} data=${JSON.stringify(this.data[year])}></aoc-widget-year>`
    )}`;
  }
}
