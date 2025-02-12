export const decisionTree = {
    start: {
        question: "Do you need unified reporting in the GA4 interface?",
        answers: [
            { text: "Yes", next: "ga4_360" },
            { text: "No", next: "bigquery" },
        ],
    },
    ga4_360: {
        question: "Do you have a GA4 360 subscription?",
        answers: [
            { text: "Yes", next: "unified_view" },
            { text: "No", next: "standard_limits" },
        ],
    },
    unified_view: {
        question: "Do you want a truly unified view (understanding session stitching limitations)?",
        answers: [
            { text: "Yes", strategy: "Strategy 3: GA4 360 Rollup Properties" },
            { text: "No", next: "filtered_views_1" },
        ],
    },
      filtered_views_1: {
        question: "Do you want filtered views of single property data?",
        answers: [
          { text: "Yes", strategy: "Strategy 4: GA4 360 Subproperties" },
          { text: "No", strategy: "Strategy 1: Single GA4 Property, Multiple Data Streams" },
        ]
      },
    standard_limits: {
      question: "Are you concerned about hitting Standard GA4 data limits, or need strict data seperation for governance?",
      answers: [
        {text: "Yes", strategy: "Consider Strategy 2 or upgrading to 360"},
        {text: "No", strategy: "Strategy 1: Single GA4 Property, Multiple Data Streams" },
      ]
    },
    bigquery: {
        question: "Do you primarily use BigQuery for analysis?",
        answers: [
            { text: "Yes", next: "bq_360" },
            { text: "No", strategy: "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration (and set up BigQuery integration)" },
        ],
    },
    bq_360: {
        question: "Do you have a GA4 360 subscription?",
        answers: [
          {text: "Yes", next: "filtered_views_2"},
          {text: "No", strategy: "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration"}
        ]
    },
    filtered_views_2:{
      question: "Do you want filtered views of single property data?",
      answers: [
        {text: "Yes", strategy: "Strategy 4: GA4 360 Subproperties"},
        {text: "No", strategy: "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration"}
      ]
    }
};