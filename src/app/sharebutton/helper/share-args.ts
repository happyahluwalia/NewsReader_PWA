export class ShareArgs {
  constructor ( public url: string,
                public title?: string,
                public description?: string,
                public image?: string,
                public tags?: string,
                public via?: string,
                public mobile?: boolean ) {

  }
}
