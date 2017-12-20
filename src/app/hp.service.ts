import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { EventManager } from '@angular/platform-browser';

@Injectable()
export class HpService {
    private viewPort = new BehaviorSubject <string>(null);
    viewPort$ = this.viewPort.asObservable();

    constructor(private eventManager: EventManager) {
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    onResize(event: UIEvent) {
        let innerWidth: number;
        let breakPoint: string;
        innerWidth = window.innerWidth;
        breakPoint = this.getCurrentBreakPoint(innerWidth);
        this.viewPort.next(breakPoint);
    }

    getCurrentBreakPoint(pixelWidth: number) {
        if (pixelWidth <= 640) {
            return 'small';
        } else if (pixelWidth > 640 && pixelWidth <= 1024) {
            return 'medium';
        } else if (pixelWidth > 1024 && pixelWidth <= 1440) {
            return 'large';
        } else if (pixelWidth > 1440 && pixelWidth <= 1920) {
            return 'xlarge';
        }
    }

    getHpJson() {
        return {
            'A': {
                'large-feature-module': {
                    'sections': [
                        {
                            'item': '',
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/A1_LF_20171211_800px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/A1_LF_20171211_1680px.jpg'
                                },
                                'link': '/gifts/christmas/stocking-stuffers',
                                'description': 'Overhead_Stocking_stuffers'
                            },
                            'headline': {
                                'text': 'Gifts for Un-Stuffy Stockings',
                                'link': '/gifts/christmas/stocking-stuffers',
                                'description': 'unstuffy_stockings'
                            },
                            'cta': {
                                'text': 'shop stocking stuffers',
                                'link': '/gifts/christmas/stocking-stuffers',
                                'description': 'shop_stocking_stuffers'
                            },
                            'headlineB': {
                                'text': 'Unforgettable Gifts for Everyone',
                                'link': '/gifts?view=all',
                                'description': 'Unforgettable_Gifts_for_Everyone'
                            },
                            'ctaB': {
                                'text': 'shop now',
                                'link': '/gifts?view=all',
                                'description': 'shop_now'
                            }
                        }
                    ]
                }
            },
            'B': {
                'seo-link-module': {
                    'seo1': {
                        'section': {
                            'text': 'Shop by Recipient',
                            'link': '/gifts/by-recipient',
                            'description': 'by_recipient'
                        },
                        'sections': [
                            {
                                'cta': {
                                    'text': 'for him',
                                    'link': '/for-him?view=all',
                                    'description': 'for_him'
                                }
                            },
                            {
                                'cta': {
                                    'text': 'for her',
                                    'link': '/for-her?view=all',
                                    'description': '_for_her'
                                }
                            },
                            {
                                'cta': {
                                    'text': 'kids',
                                    'link': '/gifts/by-recipient/gifts-for-kids',
                                    'description': '_kids'
                                }
                            },
                            {
                                'cta': {
                                    'text': 'teens',
                                    'link': '/gifts/by-recipient/gifts-for-teens-15-and-up',
                                    'description': '_teens'
                                }
                            }
                        ]
                    },
                    'seo2': {
                        'section': {
                            'text': 'Top Categories',
                            'link': '',
                            'description': ''
                        },
                        'sections': [
                            {
                                'item': 47083,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts/by-price/gifts-under-25',
                                    'description': 'Smitten_Mitten_Ornament'
                                },
                                'cta': {
                                    'text': '$25 & under',
                                    'link': '/gifts/by-price/gifts-under-25',
                                    'description': '$25_&_under'
                                }
                            },
                            {
                                'item': 22405,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts/by-price/gifts-under-50',
                                    'description': 'Pistachio_Pedestal'
                                },
                                'cta': {
                                    'text': '$50 & under',
                                    'link': '/gifts/by-price/gifts-under-50',
                                    'description': '$50_&_under'
                                }
                            },
                            {
                                'item': 47262,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts/christmas/christmas-gifts',
                                    'description': 'Cedar_Sparkle_Earrings'
                                },
                                'cta': {
                                    'text': 'christmas',
                                    'link': '/gifts/christmas/christmas-gifts',
                                    'description': 'christmas'
                                }
                            },
                            {
                                'item': 22244,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts?view=all',
                                    'description': 'Major_Scale_Musical_Wine_Glasses_-_Set_of_2'
                                },
                                'cta': {
                                    'text': 'gifts',
                                    'link': '/gifts?view=all',
                                    'description': 'gifts'
                                }
                            },
                            {
                                'item': 47499,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/this-just-in',
                                    'description': 'Bubble_Tea_Kit'
                                },
                                'cta': {
                                    'text': 'this just in',
                                    'link': '/this-just-in',
                                    'description': 'this_just_in'
                                }
                            },
                            {
                                'item': 42383,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/sale',
                                    'description': 'Unicorn_Pet_Sweater'
                                },
                                'cta': {
                                    'text': 'sale',
                                    'link': '/sale',
                                    'description': 'sale'
                                }
                            }
                        ]
                    }
                }
            },
            'C': {
                'small-feature-module': {
                    'sections': [
                        {
                            'item': 42544,
                            'displayModuleOn': 'medium',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/gifts/christmas/christmas-gifts-for-men',
                                'description': 'Through_the_Woods_Tealight_Holder'
                            },
                            'headline': {
                                'text': 'For Jack Frosts',
                                'link': '/gifts/christmas/christmas-gifts-for-men',
                                'description': 'For_Jack_Frosts'
                            },
                            'cta': {
                                'text': 'shop christmas for him',
                                'link': '/gifts/christmas/christmas-gifts-for-men',
                                'description': 'shop_christmas_for_him'
                            }
                        },
                        {
                            'item': 47262,
                            'displayModuleOn': 'medium',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/gifts/christmas/christmas-gifts-for-women',
                                'description': 'Cedar_Sparkle_Earrings'
                            },
                            'headline': {
                                'text': 'For Snow Queens',
                                'link': '/gifts/christmas/christmas-gifts-for-women',
                                'description': 'For_Snow_Queens'
                            },
                            'cta': {
                                'text': 'shop christmas for her',
                                'link': '/gifts/christmas/christmas-gifts-for-women',
                                'description': 'shop_christmas_for_her'
                            }
                        },
                        {
                            'item': 22244,
                            'displayModuleOn': 'medium',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/sets/exclusive-gifts',
                                'description': 'Major_Scale_Musical_Wine_Glasses_-_Set_of_2'
                            },
                            'headline': {
                                'text': 'Only at UncommonGoods',
                                'link': '/sets/exclusive-gifts',
                                'description': 'Only_at_UncommonGoods'
                            },
                            'cta': {
                                'text': 'shop exclusive gifts',
                                'link': '/sets/exclusive-gifts',
                                'description': 'shop_exclusive_gifts'
                            }
                        }
                    ]
                }
            },
            'D': {
                'collection-grid-module': {
                    'displayModuleOn': 'small',
                    'section': {
                        'text': '',
                        'link': '',
                        'description': ''
                    },
                    'headline': {
                        'text': 'Selling Like Hotcakes',
                        'link': '/curated/brand-new-best-sellers',
                        'description': 'Selling_Like_Hotcakes'
                    },
                    'cta': {
                        'text': 'shop brand-new bestsellers',
                        'link': '/curated/brand-new-best-sellers',
                        'description': 'shop_brand-new_bestsellers'
                    },
                    'sections': [
                        {
                            'item': 47340,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D1_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D1_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Lot_of_Love_Tagua_Bib_Necklace'
                            }
                        },
                        {
                            'item': 47508,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D2_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D2_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Love_Potion_Candle'
                            }
                        },
                        {
                            'item': 47199,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D3_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D3_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Crooked_Stem_Wine_Glass_Set'
                            }
                        },
                        {
                            'item': 47598,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D4_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D4_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Velvet_Journal'
                            }
                        },
                        {
                            'item': 47349,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D5_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D5_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Glass_Half_Full_Letterpress'
                            }
                        },
                        {
                            'item': 47493,
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D6_CG_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D6_CG_20171211_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Parker_the_Interactive_Bear_Patient_(view_2)'
                            }
                        }
                    ]
                }
            },
            'E': {
                'button-link-double-module': {
                    'section': {
                        'text': 'Holiday Favorites',
                        'link': '/gifts',
                        'description': 'holiday_favorites'
                    },
                    'sections': [
                        {
                            'item': 24197,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/gifts/housewarming/housewarming-gifts',
                                'description': 'Neighborwoods_Map_Coasters'
                            },
                            'cta': {
                                'text': 'holiday party gifts',
                                'link': '/gifts/housewarming/housewarming-gifts',
                                'description': 'holiday_party_gifts'
                            }
                        },
                        {
                            'item': 47219,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/gifts/christmas/stocking-stuffers',
                                'description': 'Chocolate_Christmas_Coal'
                            },
                            'cta': {
                                'text': 'stocking stuffers',
                                'link': '/gifts/christmas/stocking-stuffers',
                                'description': 'stocking_stuffers'
                            }
                        },
                        {
                            'item': 41266,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/G1_BD_20171211_180px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/G1_BD_20171211_360px.jpg'
                                },
                                'link': '/home-garden/holiday-decorating/holiday-decorating',
                                'description': 'My_Cinema_Lightbox'
                            },
                            'cta': {
                                'text': 'holiday decorating',
                                'link': '/home-garden/holiday-decorating/holiday-decorating',
                                'description': 'holiday_decorating'
                            }
                        },
                        {
                            'item': 11303,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/G4_BD_20171120_180px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/G4_BD_20171120_640px.jpg'
                                },
                                'link': '/gifts/by-price/gifts-under-50',
                                'description': 'Bad_Dog_Tumblers'
                            },
                            'cta': {
                                'text': '$50 & under',
                                'link': '/gifts/by-price/gifts-under-50',
                                'description': '$50_&_under'
                            }
                        }
                    ]
                }
            },
            'F': {
                'extended-story-module': {
                    'sections': [
                        {
                            'item': '',
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/F1_ES_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/F1_ES_20171211_1200px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': 'Gift_Guides'
                            },
                            'headline': {
                                'text': '23 Holiday Gift Guides',
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': '23_Holiday_Gift_Guides'
                            },
                            'copy': {
                                'text': 'For him, her, teens, math geeks, animal lovers, foodies, and more.',
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': 'browse_them_all'
                            },
                            'cta': {
                                'text': 'browse them all',
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': 'browse_them_all'
                            }
                        }
                    ]
                }
            },
            'G': {
                'text-link-module': {
                    'section': {
                        'text': 'Shop for Everyone on Your List',
                        'link': '/fun/by-interest',
                        'description': 'shop_by_interest'
                    },
                    'sections': [
                        {
                            'item': 40465,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/by-interest/geek-gifts',
                                'description': 'Planet_Lollipops'
                            },
                            'cta': {
                                'text': 'geeks',
                                'link': '/fun/by-interest/geek-gifts',
                                'description': 'geeks'
                            }
                        },
                        {
                            'item': 44160,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/wine-dine/cooking-gifts',
                                'description': 'Stoneware_Garlic_Keeper'
                            },
                            'cta': {
                                'text': 'chefs',
                                'link': '/fun/wine-dine/cooking-gifts',
                                'description': 'chefs'
                            }
                        },
                        {
                            'item': 42998,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/home-garden/garden?view=all',
                                'description': 'Mason_Jar_Indoor_Flower_Garden'
                            },
                            'cta': {
                                'text': 'gardeners',
                                'link': '/home-garden/garden?view=all',
                                'description': 'gardeners'
                            }
                        },
                        {
                            'item': 26627,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/by-interest/travel-gifts',
                                'description': 'National_Parks_Explorer_Map'
                            },
                            'cta': {
                                'text': 'travelers',
                                'link': '/fun/by-interest/travel-gifts',
                                'description': 'travelers'
                            }
                        },
                        {
                            'item': 44480,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/pets?view=all',
                                'description': 'Pedigree_Poem_Pillow'
                            },
                            'cta': {
                                'text': 'pet lovers',
                                'link': '/fun/pets?view=all',
                                'description': 'pet_lovers'
                            }
                        },
                        {
                            'item': 27131,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/games-puzzles/games-puzzles',
                                'description': 'Tabletop_Cornhole'
                            },
                            'cta': {
                                'text': 'gamers',
                                'link': '/fun/games-puzzles/games-puzzles',
                                'description': 'gamers'
                            }
                        }
                    ]
                }
            },
            'H': {
                'extended-story-module': {
                    'sections': [
                        {
                            'item': '',
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/E1_ES_20171113_640px.gif',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/E1_ES_20171113_1200px.gif'
                                },
                                'link': '/sunny/giftfinder/intro',
                                'description': 'Sunny'
                            },
                            'headline': {
                                'text': 'Find a Gift They\'ll Love',
                                'link': '/sunny/giftfinder/intro',
                                'description': 'Find_a_Gift_They\'ll_Love'
                            },
                            'copy': {
                                'text': 'Meet Sunny, our expert gift finder here to make your search for a unique gift easy as peanut pie.',
                                'link': '/sunny/giftfinder/intro',
                                'description': 'start_shopping_with_Sunny'
                            },
                            'cta': {
                                'text': 'start shopping with Sunny',
                                'link': '/sunny/giftfinder/intro',
                                'description': 'start_shopping_with_Sunny'
                            }
                        }
                    ]
                }
            },
            'I': {
                'small-feature-module': {
                    'sections': [
                        {
                            'item': 40547,
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/I1_SF_20171211_360px.gif',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/I1_SF_20171211_640px.gif'
                                },
                                'link': 'http://blog.uncommongoods.com/2017/best-bets-for-book-lovers/?source=blog_gglist17',
                                'description': 'Banned_Books_Morph_Mug'
                            },
                            'headline': {
                                'text': 'Best Bets for Literary Lovers',
                                'link': 'http://blog.uncommongoods.com/2017/best-bets-for-book-lovers/?source=blog_gglist17',
                                'description': 'Best_Bets_for_Literary_Lovers'
                            },
                            'cta': {
                                'text': 'see our ideas',
                                'link': 'http://blog.uncommongoods.com/2017/best-bets-for-book-lovers/?source=blog_gglist17',
                                'description': 'see_our_ideas'
                            }
                        },
                        {
                            'item': 26314,
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/I2_SF_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/I2_SF_20171211_640px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/2017/from-beer-to-booze-gift-picks-for-the-home-bartender/',
                                'description': 'Old_Fashioned_Carry-On_Cocktail_Kit'
                            },
                            'headline': {
                                'text': 'Gift Picks for the Home Bartender',
                                'link': 'http://blog.uncommongoods.com/2017/from-beer-to-booze-gift-picks-for-the-home-bartender/',
                                'description': 'Gift_Picks_for_the_Home_Bartender'
                            },
                            'cta': {
                                'text': 'browse our round-up',
                                'link': 'http://blog.uncommongoods.com/2017/from-beer-to-booze-gift-picks-for-the-home-bartender/',
                                'description': 'browse_our_round-up'
                            }
                        },
                        {
                            'item': 45070,
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/I3_SF_20171211_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/I3_SF_20171211_640px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/2017/geek-gifts-space/?source=blog_gglist17',
                                'description': 'Astronaut_Duvet_and_Pillowcase_Set'
                            },
                            'headline': {
                                'text': 'Gifts for Your Favorite Space Geek',
                                'link': 'http://blog.uncommongoods.com/2017/geek-gifts-space/?source=blog_gglist17',
                                'description': 'Gifts_for_Your_Favorite_Space_Geek'
                            },
                            'cta': {
                                'text': 'discover them all',
                                'link': 'http://blog.uncommongoods.com/2017/geek-gifts-space/?source=blog_gglist17',
                                'description': 'discover_them_all'
                            }
                        }
                    ]
                }
            }
        };
    }

    displayGroup(arry: any) {
      const sectionArray = [];
      arry.forEach((el, i) => {
          sectionArray.push(el.displayModuleOn);
      });
      if (sectionArray.indexOf('small') > -1) {
          return 'small';
      } else if (sectionArray.indexOf('medium') > -1) {
          return 'medium';
      } else if (sectionArray.indexOf('large') > -1) {
          return 'large';
      } else {
          return 'xlarge';
      }
    }

    displayOn(displayModuleOn: string, viewPortSize: string) {
      return {
          // tslint:disable-next-line:max-line-length
          'small': viewPortSize === 'small' || viewPortSize === 'medium' || viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
          'medium': viewPortSize === 'medium' || viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
          'large': viewPortSize === 'large' || viewPortSize === 'xlarge' ? true : false,
          'xlarge': viewPortSize === 'xlarge' ? true : false
      }[displayModuleOn];
    }

    productImgPath(itemId: number) {
      const itemDir = 'https://www.uncommongoods.com/images/items/';
      const itemIdTrim = itemId.toString().slice(0, -2);
      return itemDir + itemIdTrim + '00/' + itemId + '_1_180px.jpg 180w, '
        + itemDir + itemIdTrim + '00/' + itemId + '_1_360px.jpg 360w, '
        + itemDir + itemIdTrim + '00/' + itemId + '_1_640px.jpg 640w, '
        + itemDir + itemIdTrim + '00/' + itemId + '_1_1200px.jpg 1200w';
    }

    productImgPathSrc(itemId: any, size: number) {
        const itemDir = 'https://www.uncommongoods.com/images/items/';
        const itemIdTrim = itemId.toString().slice(0, -2);

        if (size === 180) {
            return itemDir + itemIdTrim + '00/' + itemId + '_1_180px.jpg';
        }
        if (size === 360) {
            return itemDir + itemIdTrim + '00/' + itemId + '_1_360px.jpg';
        }
        if (size === 640) {
            return itemDir + itemIdTrim + '00/' + itemId + '_1_640px.jpg';
        }
        if (size === 1200) {
            return itemDir + itemIdTrim + '00/' + itemId + '_1_1200px.jpg';
        }
    }

    responsiveImage(itemId: any, largeImage: string, smallImage: string) {
        let responsiveValue: string;
        const largeImageSize = largeImage.split('_').pop().split('.')[0].slice(0, -2);
        const smallImageSize = smallImage.split('_').pop().split('.')[0].slice(0, -2);
        responsiveValue = smallImageSize ? smallImage + ' ' + smallImageSize + 'w, ' : '';
        responsiveValue += largeImageSize ? largeImage + ' ' + largeImageSize + 'w' : '';
        responsiveValue += smallImageSize === '' && largeImageSize === '' ? this.productImgPath(itemId) : '';
        return responsiveValue;
    }

    classNameBlockGrid(sectionData: any, viewPortSize: string) {
        const nonHiddenModuleSections = [];
        if (viewPortSize === 'small') {
            return 'small-6 columns';
        } else if (viewPortSize === 'medium') {
            sectionData.forEach((module, index) => {
                if (module.displayModuleOn === 'small' || module.displayModuleOn === 'medium') {
                    nonHiddenModuleSections.push(module.displayModuleOn);
                }
            });
            return {
                '4': 'medium-3 columns',
                '6': 'medium-2 columns'
            }[nonHiddenModuleSections.length];
        } else if (viewPortSize === 'large') {
            sectionData.forEach((module, index) => {
                if (module.displayModuleOn === 'small' || module.displayModuleOn === 'medium' || module.displayModuleOn === 'large') {
                    nonHiddenModuleSections.push(module.displayModuleOn);
                }
            });
            return {
                '4': 'large-3 columns',
                '6': 'large-2 columns'
            }[nonHiddenModuleSections.length];
        } else {
            sectionData.forEach((module, index) => {
                if (module.displayModuleOn === 'small' || module.displayModuleOn === 'medium' ||
                    module.displayModuleOn === 'large' || module.displayModuleOn === 'xlarge') {
                    nonHiddenModuleSections.push(module.displayModuleOn);
                }
            });
            return {
                '4': 'medium-3 columns',
                '6': 'medium-2 columns'
            }[nonHiddenModuleSections.length];
        }
    }

    className(sectionData: any, viewPortSize: string) {
        const nonHiddenModuleSections = [];
        if (viewPortSize === 'large') {
            sectionData.forEach((module, index) => {
                if (module.displayModuleOn === 'small' || module.displayModuleOn === 'medium' || module.displayModuleOn === 'large') {
                    nonHiddenModuleSections.push(module.displayModuleOn);
                }
            });
            return {
                '2': 'large-6 columns',
                '3': 'large-4 columns',
                '4': 'large-6 columns'
            }[nonHiddenModuleSections.length];
        } else {
            sectionData.forEach((module, index) => {
                if (module.displayModuleOn === 'small' || module.displayModuleOn === 'medium' ||
                    module.displayModuleOn === 'large' || module.displayModuleOn === 'xlarge') {
                    nonHiddenModuleSections.push(module.displayModuleOn);
                }
            });
            return {
                '2': 'large-6 columns',
                '3': 'large-4 columns',
                '4': 'large-6 columns'
            }[nonHiddenModuleSections.length];
        }
    }

    hpTracking(hpModuleArry: any) {
        const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const totalModules = hpModuleArry.length;
        hpModuleArry.forEach((el: any, index: number) => {
            const anchorTagsArry = el.querySelectorAll('a');
            const alphaChar = alpha.charAt(index);
            const moduleType = el.getAttribute('data-module-type');

            anchorTagsArry.forEach((tag: any, i: number) => {
                let trackingLink: string;
                let linkNumber: number;
                let dataType: string;
                let dataDescription: string;
                let trackingCode: string;
                let ctaText: string;
                let itemNumber: string;
                let sectionDescription: string;
                let id: string;
                let name: string;
                let creative: string;
                let pos: string;

                trackingLink = tag.getAttribute('href') ? tag.getAttribute('href') : '';
                linkNumber = i + 1;
                dataType = tag.getAttribute('data-type');
                // tslint:disable-next-line:max-line-length
                dataDescription = tag.getAttribute('data-description') ? '_' + tag.getAttribute('data-description').split(' ').join('_') : '';
                trackingCode = 'hp_module_' + alphaChar + linkNumber + '_' + dataType + '_' + moduleType + dataDescription;
                ctaText = tag.getAttribute('data-cta') ? tag.getAttribute('data-cta') : 'NA';
                itemNumber = tag.getAttribute('data-itemNumber') ? tag.getAttribute('data-itemNumber') : 'NA';
                sectionDescription = tag.getAttribute('data-sectionDescription') ? tag.getAttribute('data-sectionDescription') : 'NA';
                id = alphaChar + linkNumber + '_' + moduleType;
                // tslint:disable-next-line:max-line-length
                name = ctaText.replace(/'/g, '') + '_' + trackingLink.replace(/\/\/www.uncommongoods.com/g, '').replace('//blog.uncommongoods.com', '/blog');
                creative = itemNumber;
                pos = sectionDescription;
                trackingLink = trackingLink.replace(/\/\/www.uncommongoods.com/g, '');

                if (trackingLink !== '' && moduleType !== 'TL_SEO') {
                    if (trackingLink.includes('//blog.uncommongoods.com')) {
                        trackingLink = trackingLink.replace('//blog.uncommongoods.com', '/blog');
                        // tslint:disable-next-line:max-line-length
                        tag.setAttribute('onclick', `javascript: pageTracker._trackPageview('/internal` + trackingLink + `?source=` + trackingCode + `');dataLayer.push({'internalHPModuleLinkUrl':'/internal` + trackingLink + `?source=` + trackingCode + `'},{'event':'fireGTMTrackHPModulePageView'});onPromoClick('` + id + `', '` + name + `', '` + creative + `', '` + pos + `')`);
                    } else {
                        // tslint:disable-next-line:max-line-length
                        tag.setAttribute('onclick', `javascript: pageTracker._trackPageview('/internal` + trackingLink + `?source=` + trackingCode + `');dataLayer.push({'internalHPModuleLinkUrl':'/internal` + trackingLink + `?source=` + trackingCode + `'},{'event':'fireGTMTrackHPModulePageView'});onPromoClick('` + id + `', '` + name + `', '` + creative + `', '` + pos + `')`);
                    }
                } else if (trackingLink !== '' && moduleType === 'TL_SEO') {
                    // tslint:disable-next-line:max-line-length
                    tag.setAttribute('onclick', `javascript: pageTracker._trackPageview('/internal` + trackingLink + `?source=` + trackingCode + `');dataLayer.push({'internalHPModuleLinkUrl':'/internal` + trackingLink + `?source=` + trackingCode + `'},{'event':'fireGTMTrackHPModulePageView'});onPromoClick('` + id + `', '` + name + `', '` + creative + `', '` + pos + `')`);
                } else {
                    // tslint:disable-next-line:max-line-length
                    tag.setAttribute('onclick', `javascript: event.preventDefault(); pageTracker._trackPageview('/internal` + trackingLink + `?source=` + trackingCode + `');dataLayer.push({'internalHPModuleLinkUrl':'/internal` + trackingLink + `?source=` + trackingCode + `'},{'event':'fireGTMTrackHPModulePageView'});onPromoClick('` + id + `', '` + name + `', '` + creative + `', '` + pos + `')`);
                }
            });
        });
    }
}
