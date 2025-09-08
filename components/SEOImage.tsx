import Image from 'next/image'
import { useState } from 'react'

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  caption?: string
  title?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function SEOImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  caption,
  title,
  loading = 'lazy',
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}: SEOImageProps) {
  const [imageError, setImageError] = useState(false)

  // Generate optimized alt text if not provided
  const optimizedAlt = alt || `RunRise Nation - ${title || 'Running community image'}`

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

  if (imageError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={optimizedAlt}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <figure className={`inline-block ${className}`}>
      <Image
        src={src}
        alt={optimizedAlt}
        width={width}
        height={height}
        priority={priority}
        loading={loading}
        sizes={responsiveSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        onError={() => setImageError(true)}
        className="rounded-lg shadow-lg"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Pre-configured image components for common use cases
export function HeroImage({ src, alt, ...props }: Omit<SEOImageProps, 'priority' | 'loading'>) {
  return (
    <SEOImage
      src={src}
      alt={alt}
      priority={true}
      loading="eager"
      quality={90}
      placeholder="blur"
      {...props}
    />
  )
}

export function EventImage({ src, alt, ...props }: SEOImageProps) {
  return (
    <SEOImage
      src={src}
      alt={alt}
      quality={85}
      placeholder="blur"
      {...props}
    />
  )
}

export function ProfileImage({ src, alt, ...props }: SEOImageProps) {
  return (
    <SEOImage
      src={src}
      alt={alt}
      quality={80}
      placeholder="blur"
      {...props}
    />
  )
}

export function BlogImage({ src, alt, ...props }: SEOImageProps) {
  return (
    <SEOImage
      src={src}
      alt={alt}
      quality={85}
      placeholder="blur"
      {...props}
    />
  )
}

// Utility function to generate optimized image URLs
export function getOptimizedImageUrl(
  src: string,
  width: number,
  height?: number,
  quality: number = 75
): string {
  // If it's already an external URL, return as is
  if (src.startsWith('http')) {
    return src
  }

  // For local images, you can add optimization parameters
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://runrisenation.com' 
    : 'http://localhost:3000'

  return `${baseUrl}${src}`
}

// Utility function to generate responsive image sizes
export function getResponsiveImageSizes(breakpoints: {
  mobile: number
  tablet: number
  desktop: number
}): string {
  return `(max-width: 768px) ${breakpoints.mobile}px, (max-width: 1200px) ${breakpoints.tablet}px, ${breakpoints.desktop}px`
}
