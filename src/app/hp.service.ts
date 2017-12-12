import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { EventManager } from '@angular/platform-browser';

@Injectable()
export class HpService {
    private viewPort: Subject<any>;

    constructor(private eventManager: EventManager) {
        this.viewPort = new Subject();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    get onResize$(): Observable<any> {
        return this.viewPort.asObservable();
    }

    private onResize(event: UIEvent) {
        const size = window.getComputedStyle(document.querySelector('body'),
         ':before').getPropertyValue('content').replace(/\"/g, '');
        this.viewPort.next(size);
    }

    getHpData() {
        return {
            'A': {
                'large-feature-module': {
                    'sections': [
                        {
                            'item': 45886,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/A1_LF_20171204_800px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/A1_LF_20171204_1680px.jpg'
                                },
                                'link': '/sets/top-rated-gifts',
                                'description': 'Birthstone_Wine_Bottle_Stopper'
                            },
                            'headline': {
                                'text': 'Your Favorite Things',
                                'link': '/sets/top-rated-gifts',
                                'description': 'your_favorite_things'
                            },
                            'cta': {
                                'text': 'shop top-rated gifts',
                                'link': '/sets/top-rated-gifts',
                                'description': 'shop_top-rated_gifts'
                            },
                            'headlineB': {
                                'text': 'Unforgettable Gifts for Everyone',
                                'link': '/gifts?view=all',
                                'description': 'Unforgettable_Gifts_for_Everyone'
                            },
                            'itemB': 45886,
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
                                'item': 46888,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts/by-price/gifts-under-25',
                                    'description': 'Felt_Hummingbird_Ornament'
                                },
                                'cta': {
                                    'text': '$25 & under',
                                    'link': '/gifts/by-price/gifts-under-25',
                                    'description': '$25_&_under'
                                }
                            },
                            {
                                'item': 40755,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/gifts/by-price/gifts-under-50',
                                    'description': 'Chakra_Candles_-_Set_of_7'
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
                                'item': 47514,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/this-just-in',
                                    'description': 'Holiday_Spruce_Grow_Kit'
                                },
                                'cta': {
                                    'text': 'this just in',
                                    'link': '/this-just-in',
                                    'description': 'this_just_in'
                                }
                            },
                            {
                                'item': 43628,
                                'image': {
                                    'customImage': {
                                        'small': '',
                                        'large': ''
                                    },
                                    'link': '/sale',
                                    'description': 'Beating_Heart_Wall_Clock'
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
                            'item': '47522',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D1_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D1_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Beaker_Terrarium_Kit'
                            }
                        },
                        {
                            'item': '47177',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D2_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D2_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Sugar_Maple_Necklace'
                            }
                        },
                        {
                            'item': '47507',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D3_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D3_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Sunday_Morning_Candle'
                            }
                        },
                        {
                            'item': '47444',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D4_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D4_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Faceted_Nesting_Bowls'
                            }
                        },
                        {
                            'item': '47416',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D5_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D5_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Classic_Wooden_Yoyo'
                            }
                        },
                        {
                            'item': '47536',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/D6_CG_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/D6_CG_20171204_640px.jpg'
                                },
                                'link': '/curated/brand-new-best-sellers',
                                'description': 'Narwhal_Sailcloth_Tote'
                            }
                        }
                    ]
                }
            },
            'E': {
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
                                    'small': 'https://www.uncommongoods.com/images/hp/B/H1_ES_20171204_640px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/H1_ES_20171204_1200px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': 'Gift_Guides'
                            },
                            'headline': {
                                'text': '22 Happy Holiday Gift Guides',
                                'link': 'http://blog.uncommongoods.com/holiday-gift-guides/',
                                'description': '22_gift_guides_for_festive_giving'
                            },
                            'copy': {
                                'text': 'Funny Gifts, Gifts for Foodies, Gifts for Geeks...',
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
            'F': {
                'text-link-module': {
                    'section': {
                        'text': 'Shop by Interest',
                        'link': '/fun/by-interest',
                        'description': 'shop_by_interest'
                    },
                    'sections': [
                        {
                            'item': 43038,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/by-interest/geek-gifts',
                                'description': 'Long_Distance_Touch_Lamp'
                            },
                            'cta': {
                                'text': 'geeks',
                                'link': '/fun/by-interest/geek-gifts',
                                'description': 'geeks'
                            }
                        },
                        {
                            'item': 27301,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/wine-dine/cooking-gifts',
                                'description': 'Butter_Churner'
                            },
                            'cta': {
                                'text': 'chefs',
                                'link': '/fun/wine-dine/cooking-gifts',
                                'description': 'chefs'
                            }
                        },
                        {
                            'item': 20926,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/by-interest/music-gifts',
                                'description': 'Pick_Punch'
                            },
                            'cta': {
                                'text': 'music lovers',
                                'link': '/fun/by-interest/music-gifts',
                                'description': 'music_lovers'
                            }
                        },
                        {
                            'item': 42184,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/fun/by-interest/travel-gifts',
                                'description': 'Collapsible_Water_Bottle'
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
                                    'small': 'https://www.uncommongoods.com/images/hp/B/F5_TL_20171204_180px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/F5_TL_20171204_640px.jpg'
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
                            'item': 41757,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/F6_TL_20171204_180px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/F6_TL_20171204_640px.jpg'
                                },
                                'link': '/fun/games-puzzles/games-puzzles',
                                'description': 'Basketball_Dartboard'
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
            'G': {
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
                            'item': 42986,
                            'displayModuleOn': 'small',
                            'image': {
                                'customImage': {
                                    'small': '',
                                    'large': ''
                                },
                                'link': '/gifts/by-recipient/gifts-for-kids',
                                'description': 'Personalized_Night_Before_Christmas_Book'
                            },
                            'cta': {
                                'text': 'christmas gifts for kids',
                                'link': '/gifts/by-recipient/gifts-for-kids',
                                'description': 'christmas_gifts_for_kids'
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
                                'text': 'gifts under $50',
                                'link': '/gifts/by-price/gifts-under-50',
                                'description': 'gifts_under_$50'
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
                                    'small': 'https://www.uncommongoods.com/images/hp/B/E1_ES_20171113_640px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/E1_ES_20171113_1200px.gif'
                                },
                                'link': '/sunny/giftfinder/intro',
                                'description': 'Sunny'
                            },
                            'headline': {
                                'text': 'Find a Gift They\'ll Love',
                                'link': '/sunny/giftfinder/intro',
                                'description': 'Find_gift_they\'ll_love'
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
                            'item': '',
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/I1_SF_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/I1_SF_20171204_640px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/2017/make-gift-baskets/',
                                'description': 'Taco_Gift_Basket'
                            },
                            'headline': {
                                'text': 'Gift Guide: 11 Creative Combos for \nDIY Gift Baskets',
                                'link': 'http://blog.uncommongoods.com/2017/make-gift-baskets/',
                                'description': 'gift_basket_guide_blog'
                            },
                            'cta': {
                                'text': 'see our ideas',
                                'link': 'http://blog.uncommongoods.com/2017/make-gift-baskets/',
                                'description': 'see_our_ideas'
                            }
                        },
                        {
                            'item': 23847,
                            'displayModuleOn': 'small',
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
                                'link': 'http://blog.uncommongoods.com/2017/facts-about-unicorns/',
                                'description': 'unicorn_blog'
                            },
                            'headline': {
                                'text': '37 Enchantingly Uncommon Facts about Unicorns',
                                'link': 'http://blog.uncommongoods.com/2017/facts-about-unicorns/',
                                'description': 'unicorn_headline'
                            },
                            'cta': {
                                'text': 'magic this way',
                                'link': 'http://blog.uncommongoods.com/2017/facts-about-unicorns/',
                                'description': 'magic_this_way'
                            }
                        },
                        {
                            'item': 42179,
                            'displayModuleOn': 'small',
                            'section': {
                                'text': '',
                                'link': '',
                                'description': ''
                            },
                            'image': {
                                'customImage': {
                                    'small': 'https://www.uncommongoods.com/images/hp/B/I3_SF_20171204_360px.jpg',
                                    'large': 'https://www.uncommongoods.com/images/hp/B/I3_SF_20171204_640px.jpg'
                                },
                                'link': 'http://blog.uncommongoods.com/2017/gift-lab-portable-camp-grill-and-charger/',
                                'description': 'Portable_Camp_Grill_and_Charger_blog'
                            },
                            'headline': {
                                'text': 'Gift Lab: How to be a Happy Camper with Our Portable Grill & Charger',
                                'link': 'http://blog.uncommongoods.com/2017/gift-lab-portable-camp-grill-and-charger/',
                                'description': 'gift_lab_happy_camper'
                            },
                            'cta': {
                                'text': 'find out on the blog',
                                'link': 'http://blog.uncommongoods.com/2017/gift-lab-portable-camp-grill-and-charger/',
                                'description': 'find_out_on_the_blog'
                            }
                        }
                    ]
                }
            }
        };
    }

    displayGroup(arry) {
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

    productImgPath(itemId) {
      const itemDir = 'https://www.uncommongoods.com/images/items/';
      const itemIdTrim = itemId.toString().slice(0, -2);
      // tslint:disable-next-line:max-line-length
      return itemDir + itemIdTrim + '00/' + itemId + '_1_180px.jpg 180w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_360px.jpg 360w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_640px.jpg 640w, ' + itemDir + itemIdTrim + '00/' + itemId + '_1_1200px.jpg 1200w';
    }
}