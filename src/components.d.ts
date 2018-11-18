/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WcMenuButton {
    'isOpen': boolean | undefined;
  }
  interface WcMenuButtonAttributes extends StencilHTMLAttributes {
    'isOpen'?: boolean | undefined;
    'onClosed'?: (event: CustomEvent) => void;
    'onOpened'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcMenuButton': Components.WcMenuButton;
  }

  interface StencilIntrinsicElements {
    'wc-menu-button': Components.WcMenuButtonAttributes;
  }


  interface HTMLWcMenuButtonElement extends Components.WcMenuButton, HTMLStencilElement {}
  var HTMLWcMenuButtonElement: {
    prototype: HTMLWcMenuButtonElement;
    new (): HTMLWcMenuButtonElement;
  };

  interface HTMLElementTagNameMap {
    'wc-menu-button': HTMLWcMenuButtonElement
  }

  interface ElementTagNameMap {
    'wc-menu-button': HTMLWcMenuButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}