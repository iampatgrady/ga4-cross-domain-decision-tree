export const strategyDetails = {
    "Strategy 1: Single GA4 Property, Multiple Data Streams": {
        title: "Strategy 1: Single GA4 Property, Multiple Data Streams",
        description: `
* **How it works:** Create a single GA4 property and configure a separate data stream for each website. GA4's built-in cross-domain configuration links these data streams.
* **Pros:**
    * Most straightforward setup for unified user reporting.
    * Consistent Client ID and Session ID across domains (within GA4's session definition).
    * Easiest to manage in the GA4 interface.
* **Cons:**
    * Data Aggregation: All data is combined, making it challenging to isolate data for individual domains (use Explorations or BigQuery).
    * Data Governance: Managing user access can be difficult if teams need access to specific domains only.
    * Data Limits: Standard GA4 limits (e.g., for BigQuery export) could be exceeded with high traffic.
    *  Historical Data: Data from previously separate properties stays separated.
        `,
    },
    "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration": {
        title: "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration",
        description: `
* **How it works:**  Keep separate GA4 properties for each domain but configure cross-domain tracking between them.
* **Pros:**
    * Better data separation and control.
    * Easier to manage user access and permissions.
    * Avoids data limits of a single property (for Standard GA4).
    * Complies with requirements for separate data storage.
* **Cons:**
    * Unified user reporting is *not* natively available in the GA4 interface.  Use BigQuery (recommended) or other tools based on the shared Client ID.
    * More complex setup and management.
        `,
    },
      "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration (and set up BigQuery integration)": {
        title: "Strategy 2: Multiple GA4 Properties with Cross-Domain Configuration (and set up BigQuery integration)",
        description: `
* **How it works:**  Keep separate GA4 properties for each domain but configure cross-domain tracking between them. Connect each property to BigQuery.
* **Pros:**
    * Better data separation and control.
    * Easier to manage user access and permissions.
    * Avoids data limits of a single property (for Standard GA4).
    * Complies with requirements for separate data storage.
    * BigQuery integration provides advanced analysis capabilities
* **Cons:**
    * Unified user reporting is *not* natively available in the GA4 interface.  Use BigQuery to combine data.
    * More complex setup and management.
        `,
    },
    "Strategy 3: GA4 360 Rollup Properties": {
        title: "Strategy 3: GA4 360 Rollup Properties (GA4 360 Only)",
        description: `
* **How it works:** A Rollup Property aggregates data from multiple source properties.
* **Pros:**
    * Provides a unified view of user activity in the GA4 interface.
    * Simplifies reporting for organizations with many websites.
* **Cons:**
    * Session Stitching Limitations: Sessions are *not* perfectly stitched together across source properties, even in a Rollup Property. You'll see the same user, but potentially with multiple sessions.
    * Requires a GA4 360 subscription.
        `,
    },
    "Strategy 4: GA4 360 Subproperties": {
        title: "Strategy 4: GA4 360 Subproperties (GA4 360 Only)",
        description: `
* **How it works:** Create subproperties that filter a subset of data from a source property.
* **Pros:** Allows for single data collection, but with filtered views.
* **Cons:**
    * Session Stitching Limitations: Sessions are *not* automatically connected across properties.
    * Requires a GA4 360 subscription.
        `,
    },
    "Consider Strategy 2 or upgrading to 360": {
        title: "Consider Strategy 2 or upgrading to 360",
        description: `Since you might reach standard GA4 data limits or need strict data separation, consider the advantages of Strategy 2, or the comprehensive but more costly approach of upgrading to GA4 360.`

    }
};