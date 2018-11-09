import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "wc-menu-button",
  styleUrl: "wc-menu-button.css",
  shadow: true
})
export class WcMenuButton {
  // TODO: jsdoc these props and events
  @Prop() isOpen: boolean | undefined;
  @Prop() color: string | undefined;
  @Prop() width: number | undefined;
  @Prop() noScaleOnHover: boolean;

  @Event() opened: EventEmitter;
  @Event() closed: EventEmitter;

  @State() internalIsOpen: boolean;

  handleClick = (_: any) => {
    let newOpenedValue = false;
    if (this.isOpen === undefined) {
      // we aren't using the prop so just use internal state to track if open
      newOpenedValue = !this.internalIsOpen;
      this.internalIsOpen = newOpenedValue;
    } else {
      newOpenedValue = !this.isOpen;
    }

    if (newOpenedValue) {
      this.opened.emit(null);
    } else {
      this.closed.emit(null);
    }
  };

  render() {
    // determine if the icon is in open state
    let isOpen = this.internalIsOpen;
    if (this.isOpen !== undefined) {
      isOpen = this.isOpen;
    }
    let classes = "menu-icon";
    if (isOpen) {
      classes += " open";
    }

    // check if we want to disable the scale on hover
    if (this.noScaleOnHover) {
      classes += " no-scale";
    }

    // set the color
    // TODO: validate hex color string
    const spanColor = this.color || "#000000";
    const spanStyle = { backgroundColor: spanColor };

    // set the width
    let iconWidth = "37px";
    if (this.width !== undefined && this.width >= 0) {
      iconWidth = `${this.width}px`;
    }
    const containerStyle = { width: iconWidth };

    return (
      <div
        id="menu-icon"
        class={classes}
        onClick={this.handleClick}
        style={containerStyle}
      >
        <span style={spanStyle} />
        <span style={spanStyle} />
        <span style={spanStyle} />
        <span style={spanStyle} />
      </div>
    );
  }
}
