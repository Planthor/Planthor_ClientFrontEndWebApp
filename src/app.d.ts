// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user?: {
        id: number;
        name: string;
      };
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
