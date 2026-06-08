export const SITE = {
  name: 'SuenoDePlaya.com',
  title: 'SuenoDePlaya.com • Premium Domain for Sale | Beach Lifestyle & Dream Destination',
  description:
    'SuenoDePlaya.com — The definitive premium .com domain for beach lifestyle brands, dream vacation platforms, coastal real estate ventures, and luxury travel destinations. Available for acquisition.',
  url: 'https://suenodeplaya.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: 'tu-wrmd1rqZFUfCwijTo0_fn-IloHm3lJr7y4BjNLlY'
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '6ff58dac-524c-46cd-3151-33f9604d0100',
  secondaryImageId: '49ff427e-71a5-4078-efa6-631349144800',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('SuenoDePlaya.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring SuenoDePlaya.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
