import React, { Fragment } from 'react'

const Tagline = ({ content, className }) => (
  <div className={className}>
    {content.map((textRow, i) => (
      <Fragment key={className + i}>
        {textRow}
        <br />
      </Fragment>
    ))}
  </div>
)

export default React.memo(Tagline)
