import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "wc-menu-button",
  styleUrl: "wc-menu-button.css",
  shadow: true
})
export class WcMenuButton {
  // TODO: jsdoc these props and events
  @Prop() isOpen: boolean | undefined;

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

    return (
      <div id="menu-icon" class={classes} onClick={this.handleClick}>
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}
