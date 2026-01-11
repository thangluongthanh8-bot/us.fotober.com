import iconBrand from '@/app/components/layout/assets/icon-branding.png'
import iconCalender from '@/app/components/layout/assets/icon-calender.png'
// import iconCar from '@/app/components/layout/assets/icon-car.png'
import iconCar from '@/app/components/layout/assets/icon-car-2.png'
import iconImage360 from '@/app/components/layout/assets/icon-image-360.png'
import iconTech from '@/app/components/layout/assets/icon-tech.png'
import iconTab12 from '@/app/components/layout/assets/icon-tab-12.png'
import iconTab13 from '@/app/components/layout/assets/icon-tab-13.png'
import iconTab15 from '@/app/components/layout/assets/icon-tab-15.png'
import iconTab17 from '@/app/components/layout/assets/icon-tab-17.png'
import iconTabImage3 from '@/app/components/layout/assets/icon-tab-image-3.png'
import iconTabImage4 from '@/app/components/layout/assets/icon-tab-image-4.png'
import iconTabImage5 from '@/app/components/layout/assets/icon-tab-image-5.png'
import iconVideo from '@/app/components/layout/assets/icon-video.png'
import iconAboutUs from '@/app/components/layout/assets/icon-about-us.png'
import iconCareer from '@/app/components/layout/assets/icon-career.png'
import Icon01 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/01.jpg'
import Icon02 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/02.jpg'
import Icon03 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/03.jpg'
import Icon04 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/04.jpg'
import Icon05 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/05.jpg'
import Icon06 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/06.jpeg'
import Icon07 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/07.jpg'
import Icon08 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/08.jpg'
import Icon09 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/09.jpg'
import Icon10 from '@/app/components/SessionUnderConsiderationWithMockContent/assets/10.jpg'
import { createDirectus, rest } from '@directus/sdk'


export const getImageUrl = (id: string): string => {
  return `https://api-fotober.fotober.com/assets/${id}`
}

export const clientDirectus = createDirectus('https://api-fotober.fotober.com/').with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }),
)
export const whatAppsUrl = 'https://wa.me/84987654321'
export const whatAppsFormat = '+84 987 654 321'


export const SERVICE_LINK = {
  imageEnhancement: '/services/real-estate-photo-editing',
  dayToDusk: '/services/day-to-dusk',
  itemRemoval: '/services/item-removal',
  propertyVideoEditing: '/services/real-estate-video-editing',
  carVideoEditing: '/services/car-video-editing',
  eventRecap: '/services/event-highlight-video',
  personalBrandingVideoEditing: '/services/wedding-highlight-video',
  virtualStaging: '/services/virtual-staging',
  virtualRenovation: '/services/virtual-renovation',
  floorPlan: '/services/floor-plan',
  render: '/services/rendering',
  image360Enhancement: '/services/360-image-enhancement',
}

export const listChildPhotoEditing = [
  {
    title: 'Real Estate Photo Editing',
    icon: iconTabImage5,
    classIcon: undefined,
    link: SERVICE_LINK.imageEnhancement,
    imageThumbId: null,
    imageIdAfter: '42c478df-cfea-4a36-b830-f2f584438f5c',
    imageIdBefore: '2c0acdf2-4169-4e50-aec7-1945eed0f37a',
    PhotoSphereUrl: undefined,
    videoThumbId: null,
    description:
      'Automatically enhance your property photos with Fotober’s Real Estate Photo Editing',
    description1:
      'High-quality professional photos are crucial in buyers’ decision-making process. Our team of experienced editors will put your property in the best light.',
  },
  {
    title: 'Day To Dusk',
    link: SERVICE_LINK.dayToDusk,
    icon: iconTabImage3,
    classIcon: undefined,
    imageThumbId: null,
    description:
      'Turn daylight home photos into eye-catching dusk images. ',
    PhotoSphereUrl: undefined,
    videoThumbId: null,
    imageIdBefore: '1d76dbd0-a768-4d85-9cfa-77d99c7ac15f',
    imageIdAfter: '3bb5cab6-47df-43b9-a6e4-ebf7248e8149',
    description1:
      'Transform your daytime property shot into a captivating dusk photo effortlessly. Make your listing shine with a stunning virtual twilight hero shot.',
  },
  {
    title: 'Item Removal',
    icon: iconTabImage4,
    classIcon: undefined,
    link: SERVICE_LINK.itemRemoval,
    imageIdBefore: '3a010e87-af42-4c43-90e0-649d58e4e934',
    imageIdAfter: '83ce7530-cb2b-449c-bcc4-b7f031efb9f1',
    imageThumbId: null,
    videoThumbId: null,
    description:
      'Eliminate unwanted distractions for a clean, professional look.\n',
    PhotoSphereUrl: undefined,
    description1:
      'Our editing experts can remove clutter and unwanted objects from your photos and give them a fresh look.',
  },
  {
    title: '360° Image Enhancement',
    icon: iconImage360,
    classIcon: undefined,
    link: SERVICE_LINK.image360Enhancement,
    imageThumbId: null,
    videoThumbId: null,
    imageIdBefore: null,
    imageIdAfter: null,
    description:
      'Improve the quality and visual appeal of 360-degree images.',
    PhotoSphereUrl: '/service/image-360/thumb/R0020070_HDR Panorama_pano_pano.jpg',
    description1:
      'Presenting the house with panoramic views allows virtual exploration in all directions for a highly immersive experience.',
  },
]
export const listChildVideoEditing = [
  {
    id: 'real_estate_video_editing',
    title: 'Real Estate Video Editing',
    link: SERVICE_LINK.propertyVideoEditing,
    icon: iconVideo,
    classIcon: null,
    PhotoSphereUrl: null,
    imageThumbId: null,
    imageIdBefore: null,
    imageIdAfter: null,
    videoThumbId: 'aPrOunkrJNY',
    description:
      'Showcase homes with smooth transitions and compelling narratives.',
  },
  {
    id: 'car_video_editing',
    title: 'Car Video Editing',
    link: SERVICE_LINK.carVideoEditing,
    icon: iconCar,
    classIcon: '',
    PhotoSphereUrl: undefined,
    imageThumbId: null,
    imageIdBefore: null,
    imageIdAfter: null,
    // videoThumbId: 'v3YMKZ5-4_g',
    videoThumbId: 'UvAyYRrJZBU',
    description:
      'Highlight vehicles with engaging shots, special effects, and sound design.',
  },
  {
    id: 'personal_branding_video_editing',
    title: 'Wedding Highlight Video',
    link: SERVICE_LINK.personalBrandingVideoEditing,
    icon: iconBrand,
    videoThumbId: 'PNUHVgYM0hM',
    classIcon: null,
    PhotoSphereUrl: null,
    imageThumbId: null,
    imageIdBefore: null,
    imageIdAfter: null,
    description:
      'Keep your remarkable moment in your wedding with expert editing and creative effects.',
  },
  {
    id: 'event_recap',
    title: 'Event Highlight Video',
    link: SERVICE_LINK.eventRecap,
    icon: iconCalender,
    videoThumbId: 'Ei4jglLTFsk',
    classIcon: null,
    PhotoSphereUrl: null,
    imageThumbId: null,
    imageIdBefore: null,
    imageIdAfter: null,
    description:
      'Summarize key moment from events with engaging music.',
  },
]

export const listChildArchitecture = [
  {
    title: 'Virtual Staging',
    icon: iconTab12,
    classIcon: null,
    link: SERVICE_LINK.virtualStaging,
    imageIdBefore: 'fe13dad8-a4f3-4528-a7f9-9b85703e5d79',
    imageIdAfter: '2bbf7a2b-b96f-4e78-859c-a314118125ea',
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Help buyers fall in love with your listings by turning vacant rooms into stylish spaces.\n',
    description1:
      'Add furniture to vacant rooms to showcase the properties’ best potential and help buyers envision their future home design.',
  },
  {
    title: 'Virtual Renovation',
    link: SERVICE_LINK.virtualRenovation,
    imageIdBefore: 'dabfcb28-19b0-4ca1-b421-cf2344861460',
    imageIdAfter: 'dd42c6ff-f502-4213-976f-089dbc5d1d0b',
    icon: iconTab13,
    classIcon: undefined,
    PhotoSphereUrl: undefined,
    imageThumbId: undefined,
    videoThumbId: null,
    description:
    
        'Showcase your listings’ potential with <br/> virtual upgrades.',
    description1:
      'Showcase your listings’ potential with \n virtual upgrades.',
  },
  {
    title: '2D - 3D Floor Plan',
    link: SERVICE_LINK.floorPlan,
    icon: iconTab15,
    imageThumbId: '0e6e0086-50a2-42cb-bd5a-94090185a8a0',
    imageIdBefore: undefined,
    imageIdAfter: undefined,
    PhotoSphereUrl: undefined,
    classIcon: undefined,
    videoThumbId: null,

    description1:
      'Showcase a complete floor plan in 2-D or 3-D images help the customers have an overview of how the rooms are arranged.',
    description:
      'Provide detailed spatial arrangements and visually appealing layouts.\n',
  },
  {
    title: 'Rendering',
    link: SERVICE_LINK.render,
    imageThumbId: '9a0a9312-b43a-4507-ac6d-a790377256c5',
    imageIdBefore: undefined,
    imageIdAfter: undefined,
    icon: iconTab17,
    classIcon: undefined,
    PhotoSphereUrl: undefined,
    videoThumbId: null,
    description1:
      'Transform ideas into reality through our rendering service, offering a diverse range of plans and designs.',
    description:
      'Use 3D rendering to showcase your unbuilt property while it’s still in the concept phase\n',
  },
]
export const listChildCompany = [
  {
    title: 'About Us',
    icon: iconAboutUs,
    classIcon: null,
    link: '/about-us',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Creative media experts delivering stand-out Real Estate visuals with passion and precision.',
    description1:
      'Creative media experts delivering stand-out Real Estate visuals with passion and precision.',
  },
  {
    title: 'Contact Us',
    icon: iconCareer,
    classIcon: null,
    link: '/contact',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
description:
      'Have questions or need support? Reach out to us for inquiries, quotes, and 24/7 assistance.',
    description1:
      'Have questions or need support? Reach out to us for inquiries, quotes, and 24/7 assistance.',
  },
]

export const listChildBlogs = [
  {
    title: 'Photography',
    icon: iconTabImage5,
    classIcon: null,
    link: '/blogs/photography',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Explore tips and trends in photography.',
    description1:
      'Explore tips and trends in photography.',
  },
  {
    title: 'Videography',
    icon: iconVideo,
    classIcon: null,
    link: '/blogs/videography',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Explore tips and trends in videography.',
    description1:
      'Explore tips and trends in videography.',
  },
  {
    title: 'Architecture and Interior',
    icon: iconTab12,
    classIcon: null,
    link: '/blogs/architecture-and-interior',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Discover architectural designs and interior styling ideas.',
    description1:
      'Discover architectural designs and interior styling ideas.',
  },
  {
    title: 'Technology and Tool',
    icon: iconTech,
    classIcon: null,
    link: '/blogs/technology-and-tool',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Stay updated with the latest tech and tools in the industry.',
    description1:
      'Stay updated with the latest tech and tools in the industry.',
  },
  {
    title: 'Marketing',
    icon: iconBrand,
    classIcon: null,
    link: '/blogs/marketing',
    imageIdBefore: null,
    imageIdAfter: null,
    imageThumbId: null,
    PhotoSphereUrl: null,
    videoThumbId: null,
    description:
      'Learn marketing strategies to grow your business.',
    description1:
      'Learn marketing strategies to grow your business.',
  },
]

export const isClient = (): boolean => typeof window !== 'undefined'
export const listGroupService = [
  ...listChildArchitecture,
  ...listChildPhotoEditing,
  ...listChildVideoEditing,
]

export const dataMockSessionUnderConsideration = [
  {
    image: Icon01,
    title: 'James',
    service: 'Real Estate Photo Editing',
    comment:
      'I recently tried Fotober’s real estate photo editing service, and I was blown away by how they transformed my listing photos. They corrected the lighting, enhanced the colors, and made each room look bright and spacious. My clients immediately noticed the difference!',
  },
  {
    image: Icon02,
    title: 'John',
    service: 'Real Estate Photo Editing',
    comment:
      'Their advanced sky replacement and lawn retouching capabilities took my dull exterior shots to a whole new level. The once-overcast sky now looks crisp and blue, and the greenery around the property looks lush and inviting. I’ve already seen an uptick in inquiries because of these eye-catching visuals.',
  },
  {
    image: Icon03,
    title: 'Michael',
    service: 'Day to Dusk',
    comment:
      'As a realtor, I’m especially impressed with Fotober’s day-to-dusk service. They turned my daytime exterior shots into gorgeous twilight scenes, which captured tons of buyer interest. It’s a small touch that makes a big impact.',
  },
  {
    image: Icon04,
    title: 'David',
    service: 'Real Estate Photo Editing',
    comment:
      'They also offered a specialized interior retouching option that removed minor imperfections and added just the right amount of brightness. It really showcased the property’s architectural details and made the living spaces feel more welcoming. My sellers were thrilled with the final images!',
  },
  {
    image: Icon05,
    title: 'William',
    service: 'Real Estate Video Editing',
    comment:
      'Their real estate video editing service is top-notch. They smoothly stitched together all the clips, added tasteful transitions, and applied just the right color grading to showcase each property’s best features. I’ve never had so many positive comments from potential buyers.',
  },
  {
    image: Icon06,
    title: 'Christopher',
    service: 'Floor Plan Redraw',
    comment:
      'I used Fotober’s floor plan redraw service for a property listing, and the accuracy was on point. It made it super easy for me to share clear, detailed floor plans with prospective buyers. Saved me a lot of time and hassle!',
  },
  {
    image: Icon07,
    title: 'Matthew',
    service: 'Real Estate Photo Editing',
    comment:
      'Communication with their team was fantastic. I explained the look I wanted for my images, and they nailed it—from color correction to adding subtle enhancements. The photos came back looking consistent and on-brand.',
  },
  {
    image: Icon08,
    title: 'Daniel',
    service: 'Real Estate Photo Editing',
    comment:
      'One of the best parts is their quick turnaround time. I sent in a batch of listing photos late at night, and by the next evening, they were all beautifully edited and ready to go. That efficiency keeps my real estate marketing running smoothly.',
  },
  {
    image: Icon09,
    title: 'Alexander',
    service: 'Real Estate Photo Editing',
    comment:
      'The free trial option really sold me. I got to see their quality and attention to detail without any risk. After seeing the impressive edits, I decided to trust them with all my upcoming listings.',
  },
  {
    image: Icon10,
    title: 'Isabella',
    service: 'Real Estate Photo Editing',
    comment:
      'From basic touch-ups to more advanced retouching, they’ve proven they can handle all my real estate editing needs. I appreciate how they always consult me on revisions, ensuring the final images match my exact vision every single time.',
  },
]

// ============================================
// MOCK DATA FOR STATIC LANDING PAGE
// ============================================

/**
 * Mock data for blog posts - replaces GetListBlogsHome GraphQL query
 * Used in: app/home/SessionOutBlogs/index.tsx
 * Images are stored locally in app/home/SessionOutBlogs/assets/
 */
export const mockBlogPosts = [
  {
    id: '1',
    slug: 'us-housing-market-trends-by-city-2026',
    title: 'US Housing Market Trends by City in 2026: 10 Cities Where Home Prices Are Rising',
    imagePath: '/home/SessionOutBlogs/assets/1.webp',
    category: {
      title: 'Marketing',
      id: 'cat-marketing',
    },
    date_created: '2026-01-08T10:00:00Z',
    author: {
      id: 'author-daniel',
      name: 'Daniel Ditran',
      bio: 'Real estate market analyst and trend researcher.',
    },
    summary: 'As the housing market moves into a new phase, national averages no longer tell the full story. US housing market trends by city reveal where opportunities lie.',
  },
  {
    id: '2',
    slug: 'ai-photo-editing-tools-real-estate',
    title: 'AI Photo Editing Tools for Real Estate',
    imagePath: '/home/SessionOutBlogs/assets/2.webp',
    category: {
      title: 'Technology and Tool',
      id: 'cat-tech',
    },
    date_created: '2026-01-07T14:30:00Z',
    author: {
      id: 'author-michael',
      name: 'Michael Brown',
      bio: 'Technology expert specializing in AI tools for real estate.',
    },
    summary: 'AI photo editing tools for real estate help enhance property photos with sky replacement, lighting correction, virtual staging, and more.',
  },
  {
    id: '3',
    slug: 'real-estate-2026-predictions',
    title: 'Real Estate 2026 Predictions: Opportunities, Challenges, and Key Trends',
    imagePath: '/home/SessionOutBlogs/assets/3.webp',
    category: {
      title: 'Marketing',
      id: 'cat-marketing',
    },
    date_created: '2025-12-29T09:15:00Z',
    author: {
      id: 'author-daniel',
      name: 'Daniel Ditran',
      bio: 'Real estate market analyst and trend researcher.',
    },
    summary: 'As the U.S. real estate market approaches 2026, the conversation is no longer about recovery - it is about recalibration. After years of unprecedented shifts.',
  },
  {
    id: '4',
    slug: 'how-to-take-photo-glass-frame-without-reflection',
    title: 'How to Take a Photo of a Glass Frame Without Reflection',
    imagePath: '/home/SessionOutBlogs/assets/4.webp',
    category: {
      title: 'Photography',
      id: 'cat-photography',
    },
    date_created: '2025-11-18T16:45:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'Learn how to take a photo of a glass frame without reflection using simple setup, camera settings, and lighting tips. Edited results included.',
  },
  {
    id: '5',
    slug: 'how-to-shrink-image-photoshop-without-losing-quality',
    title: 'How to Shrink an Image in Photoshop Without Losing Quality',
    imagePath: '/home/SessionOutBlogs/assets/5.webp',
    category: {
      title: 'Technology and Tool',
      id: 'cat-tech',
    },
    date_created: '2025-11-18T11:00:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'Learn how to shrink an image in Photoshop without losing quality. Follow these expert tips to resize images for web, print, or real estate listings.',
  },
  {
    id: '6',
    slug: 'dji-mini-3-pro-vs-dji-mini-4-pro-real-estate',
    title: 'DJI Mini 3 Pro vs DJI Mini 4 Pro: Best Pick for Real Estate',
    imagePath: '/home/SessionOutBlogs/assets/6.webp',
    category: {
      title: 'Technology and Tool',
      id: 'cat-tech',
    },
    date_created: '2025-11-18T08:30:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'Comparing the DJI Mini 3 Pro vs DJI Mini 4 Pro for real estate photography, which gives better image quality, flight stability, safety, and value.',
  },
  {
    id: '7',
    slug: 'how-to-use-ai-video-marketing-real-estate',
    title: 'How to Use AI Video Marketing for Real Estate Success',
    imagePath: '/home/SessionOutBlogs/assets/7.webp',
    category: {
      title: 'Videography',
      id: 'cat-videography',
    },
    date_created: '2025-11-03T10:00:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'Transform your real estate listings with AI video marketing. Discover how virtual tours and smart strategies help you sell faster and reach more buyers.',
  },
  {
    id: '8',
    slug: 'how-to-master-ai-video-generation-real-estate-2025',
    title: 'How to Master AI Video Generation for Real Estate 2025',
    imagePath: '/home/SessionOutBlogs/assets/8.webp',
    category: {
      title: 'Videography',
      id: 'cat-videography',
    },
    date_created: '2025-11-03T09:00:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'The future of real estate 2025 is AI video generation. Turn static photos into immersive virtual tours. Master the shift with cutting-edge AI tools.',
  },
  {
    id: '9',
    slug: 'how-to-make-small-room-look-bigger',
    title: 'How to Make a Small Room Look Bigger: 10 Essential Tips',
    imagePath: '/home/SessionOutBlogs/assets/9.webp',
    category: {
      title: 'Architecture and Interior',
      id: 'cat-interior',
    },
    date_created: '2025-11-03T08:00:00Z',
    author: {
      id: 'author-thao',
      name: 'Thao Dinh',
      bio: 'Professional photographer and photo editing specialist.',
    },
    summary: 'Discover with Fotober 10 essential tips on how to make a small room look bigger. This guide covers everything from color to lighting and furniture placement.',
  },
]

/**
 * Mock data for service categories - replaces GetListServices GraphQL query
 * Used in: app/home/SessionContact/index.tsx
 */
export const mockCategories = [
  {
    id: 'cat-photo-editing',
    title: 'Real Estate Photo Editing',
    color: '#4CAF50',
    slug: 'real-estate-photo-editing',
  },
  {
    id: 'cat-day-to-dusk',
    title: 'Day To Dusk',
    color: '#FF9800',
    slug: 'day-to-dusk',
  },
  {
    id: 'cat-item-removal',
    title: 'Item Removal',
    color: '#2196F3',
    slug: 'item-removal',
  },
  {
    id: 'cat-virtual-staging',
    title: 'Virtual Staging',
    color: '#9C27B0',
    slug: 'virtual-staging',
  },
  {
    id: 'cat-virtual-renovation',
    title: 'Virtual Renovation',
    color: '#E91E63',
    slug: 'virtual-renovation',
  },
  {
    id: 'cat-floor-plan',
    title: '2D - 3D Floor Plan',
    color: '#00BCD4',
    slug: 'floor-plan',
  },
  {
    id: 'cat-rendering',
    title: 'Rendering',
    color: '#795548',
    slug: 'rendering',
  },
  {
    id: 'cat-360-enhancement',
    title: '360° Image Enhancement',
    color: '#607D8B',
    slug: '360-image-enhancement',
  },
  {
    id: 'cat-video-editing',
    title: 'Real Estate Video Editing',
    color: '#F44336',
    slug: 'real-estate-video-editing',
  },
  {
    id: 'cat-car-video',
    title: 'Car Video Editing',
    color: '#3F51B5',
    slug: 'car-video-editing',
  },
  {
    id: 'cat-wedding-video',
    title: 'Wedding Highlight Video',
    color: '#FF5722',
    slug: 'wedding-highlight-video',
  },
  {
    id: 'cat-event-video',
    title: 'Event Highlight Video',
    color: '#009688',
    slug: 'event-highlight-video',
  },
]

/**
 * Mock response structure for contact form submission
 * Used to simulate successful form submission without API
 */
export const mockContactFormResponse = {
  success: true,
  message: 'Thank you for your submission! We will get back to you soon.',
  data: {
    id: 'mock-contact-id',
    created_at: new Date().toISOString(),
  },
}

/**
 * Mock response structure for file upload
 * Used to simulate successful file upload without API
 */
export const mockFileUploadResponse = {
  id: 'mock-file-id',
  storage: 'local',
  filename_disk: 'uploaded-file.jpg',
  filename_download: 'original-filename.jpg',
  title: null,
  type: 'image/jpeg',
  folder: 'd5c07074-22f6-4f0b-8afb-1d7f3d7769ca',
  uploaded_by: null,
  uploaded_on: new Date().toISOString(),
  modified_by: null,
  modified_on: null,
  charset: null,
  filesize: 1024000,
  width: 1920,
  height: 1080,
  duration: null,
  embed: null,
  description: null,
  location: null,
  tags: null,
}

/**
 * Flag to enable/disable static mode
 * When true, components should use mock data instead of API calls
 */
export const USE_STATIC_DATA = true

/**
 * Helper function to simulate API delay for realistic UX
 * @param ms - milliseconds to delay
 */
export const simulateApiDelay = (ms: number = 500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Helper function to simulate form submission (for static landing page)
 * Returns mock success response after delay
 */
export const mockSubmitContactForm = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _formData: any
): Promise<typeof mockContactFormResponse> => {
  await simulateApiDelay(1000)
  // In static mode, we just log the form data and return success
  console.log('Form submitted (static mode):', _formData)
  return mockContactFormResponse
}

/**
 * Helper function to simulate file upload (for static landing page)
 * Returns mock file response after delay
 */
export const mockUploadFile = async (
  _file: File
): Promise<typeof mockFileUploadResponse> => {
  await simulateApiDelay(800)
  console.log('File uploaded (static mode):', _file.name)
  return {
    ...mockFileUploadResponse,
    filename_download: _file.name,
    filesize: _file.size,
  }
}
