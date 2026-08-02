// Hand-drawn marks for the skills that have no brand logo (concepts rather
// than products), plus VS Code which simple-icons doesn't carry.
// Same 24x24 grid and visual weight as the generated brand icons.

export const customIcons = {
  machineLearning: {
    color: '#8B5CF6',
    node: (
      <>
        <g stroke="currentColor" strokeWidth="1.3" opacity="0.55" fill="none">
          <path d="M4.4 6.2 12 9M4.4 12H12M4.4 17.8 12 15M12 9l8 3M12 15l8-3" />
        </g>
        <circle cx="4.4" cy="6.2" r="2.4" />
        <circle cx="4.4" cy="12" r="2.4" />
        <circle cx="4.4" cy="17.8" r="2.4" />
        <circle cx="12" cy="9" r="2.4" />
        <circle cx="12" cy="15" r="2.4" />
        <circle cx="20" cy="12" r="2.4" />
      </>
    )
  },

  artificialIntelligence: {
    color: '#06B6D4',
    node: (
      <>
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2.6" />
        <g>
          <rect x="8.2" y="1.6" width="1.7" height="4" rx="0.85" />
          <rect x="11.15" y="1.6" width="1.7" height="4" rx="0.85" />
          <rect x="14.1" y="1.6" width="1.7" height="4" rx="0.85" />
          <rect x="8.2" y="18.4" width="1.7" height="4" rx="0.85" />
          <rect x="11.15" y="18.4" width="1.7" height="4" rx="0.85" />
          <rect x="14.1" y="18.4" width="1.7" height="4" rx="0.85" />
          <rect x="1.6" y="8.2" width="4" height="1.7" rx="0.85" />
          <rect x="1.6" y="11.15" width="4" height="1.7" rx="0.85" />
          <rect x="1.6" y="14.1" width="4" height="1.7" rx="0.85" />
          <rect x="18.4" y="8.2" width="4" height="1.7" rx="0.85" />
          <rect x="18.4" y="11.15" width="4" height="1.7" rx="0.85" />
          <rect x="18.4" y="14.1" width="4" height="1.7" rx="0.85" />
        </g>
      </>
    )
  },

  nlp: {
    color: '#F472B6',
    node: (
      <>
        <path
          d="M5 3.5h14a3.5 3.5 0 0 1 3.5 3.5v6.5a3.5 3.5 0 0 1-3.5 3.5h-6.2L8 21.5v-4.5H5a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 5 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="6.1" y="8.4" width="1.8" height="3.4" rx="0.9" />
        <rect x="9.4" y="6.7" width="1.8" height="6.8" rx="0.9" />
        <rect x="12.7" y="8" width="1.8" height="4.2" rx="0.9" />
        <rect x="16" y="6.9" width="1.8" height="6.4" rx="0.9" />
      </>
    )
  },

  dataAnalysis: {
    color: '#10B981',
    node: (
      <>
        <rect x="2.5" y="14.5" width="4.6" height="7" rx="1.3" />
        <rect x="9.7" y="11" width="4.6" height="10.5" rx="1.3" />
        <rect x="16.9" y="7.5" width="4.6" height="14" rx="1.3" />
        <path
          d="M4.8 9.6 12 6.1l7.2-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
        <circle cx="4.8" cy="9.6" r="1.6" />
        <circle cx="12" cy="6.1" r="1.6" />
        <circle cx="19.2" cy="3.1" r="1.6" />
      </>
    )
  },

  deepLearning: {
    color: '#F59E0B',
    node: (
      <>
        <path d="M12 1.8 22.6 7 12 12.2 1.4 7 12 1.8Z" />
        <path
          d="M1.4 12 12 17.2 22.6 12M1.4 17 12 22.2 22.6 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  },

  restApi: {
    color: '#38BDF8',
    node: (
      <>
        <path
          d="M8.4 4.8 2.2 12l6.2 7.2M15.6 4.8 21.8 12l-6.2 7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" />
      </>
    )
  },

  vscode: {
    color: '#007ACC',
    node: (
      <>
        <path d="M18.6 2.2 23.2 4.5v15L18.6 21.8 7.2 12 18.6 2.2Z" />
        <path d="M4.6 8.3 1.2 10.4v3.2l3.4 2.1L9.4 12 4.6 8.3Z" />
      </>
    )
  }
}
