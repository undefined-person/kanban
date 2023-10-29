import { ReactNode } from 'react'
import { mergeClasses } from 'shared/libs/mergeClasses'

type Variant = 'headingXL' | 'headingL' | 'headingM' | 'headingS' | 'bodyL' | 'bodyM'

const variants: Record<Variant, string> = {
  headingXL: 'text-2xl font-bold',
  headingL: 'text-lg font-bold',
  headingM: 'font-bold',
  headingS: 'text-xs font-bold',
  bodyL: 'text-sm',
  bodyM: 'text-xs',
}

interface TypographyProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant: Variant
  children: ReactNode
  className?: string
}

export const Typography = ({ as, children, variant, className }: TypographyProps) => {
  const Component = as

  return <Component className={mergeClasses(variants[variant], className)}>{children}</Component>
}
