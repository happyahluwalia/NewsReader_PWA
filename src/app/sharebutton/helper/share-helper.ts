import { ShareProvider } from 'app/sharebutton/helper/share-provider.enum';
import { ShareArgs } from './share-args';

export module Helper {


const fbLink = (args: ShareArgs): string => {
  let shareUrl = 'https://www.facebook.com/sharer/sharer.php';
        shareUrl += `?u=${args.url}`;

        if (args.title) {
            shareUrl += `&title=${args.title}`;
        }
        if (args.description) {
            shareUrl += `&description=${args.description}`;
        }
        if (args.image) {
            shareUrl += `&picture=${args.image}`;
        }
        return shareUrl;
};

const gLink = (args: ShareArgs): string => {
  return `https://plus.google.com/share?url=${args.url}`;
};

const tLink = (args: ShareArgs): string => {
        let shareUrl = 'https://twitter.com/intent/tweet';
        shareUrl += `?url=${args.url}`;

        if (args.title) {
            shareUrl += `&text=${args.title}`;
        }
        if (args.via) {
            shareUrl += `&via=${args.via}`;
        }
        if (args.tags) {
            shareUrl += `&hashtags=${args.tags}`;
        }

        return shareUrl;
};

const wLink = (args: ShareArgs): string => {
    let shareUrl = `${(args.mobile) ? 'whatsapp://' : 'https://web.whatsapp.com/'}send?text=`;

        // Title will add a new line
        if (args.title) {
            shareUrl += `${args.title} %0A`;
        }

        // Description adds a pipe to separate the url
        if (args.description) {
            shareUrl += `${args.description} | `;
        }

        shareUrl += `${args.url}`;
        return shareUrl;
};

 export const ShareFactory = (args: ShareArgs, type: ShareProvider): string => {
   switch (type) {
     case ShareProvider.FACEBOOK:
        return fbLink(args);
      case ShareProvider.GOOGLE:
        return gLink(args);
      case ShareProvider.TWITTER:
        return tLink(args);
      case ShareProvider.WHATSAPP:
        return wLink(args);
      default:
        return '';
 }
};

 export const getProviderNum = <T>(value: string | number, enumeration: T) => {
        let result: number;
        if (typeof value !== 'undefined') {
            if (typeof value === 'string' && enumeration[value.toUpperCase()] >= 0) {
                result = <number>enumeration[value.toUpperCase()];
            } else if (typeof value === 'number' && enumeration[`${value}`]) {
                result = <number>enumeration[enumeration[`${value}`]];
            }
        }

        return result;
    };

}
