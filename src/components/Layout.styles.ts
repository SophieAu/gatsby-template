import { css } from 'linaria';

export const globalResets = css`
  :global() {
    :root {
      font-size: 16px;
    }

    html,
    body {
      border: 0;
      margin: 0;
      padding: 0;
    }
  }
`;

export const main = css``;
