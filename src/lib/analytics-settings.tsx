'use client'

import { useEffect, useState } from 'react'

import { useIsMounted } from 'usehooks-ts'

import { GoogleAnalyticsID, siteHostname } from '../config/setting'
import { GoogleAnalytics } from '../utils/analytic/google-analytics'

export const Analytics = () => {
  const [isDebugging, setIsDebugging] = useState(false)
  const [isComponentMounted, setIsComponentMounted] = useState(false)
  const isMounted = useIsMounted()
  const getDebugFlag = () => {
    return window.location.hostname !== siteHostname
  }
  useEffect(() => {
    if (isMounted()) {
      setIsDebugging(getDebugFlag())
      setIsComponentMounted(true)
    }
  }, [isMounted])

  return isComponentMounted ? (
    <GoogleAnalytics gaId={GoogleAnalyticsID} debugMode={getDebugFlag()} />
  ) : null
}
