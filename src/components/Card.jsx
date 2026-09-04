function Card({ as: Tag = 'div', className = '', shadow = true, tone, children, ...rest }) {
  const classes = ['card', shadow ? 'card--shadow' : '', tone ? `card--${tone}` : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default Card
