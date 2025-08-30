/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import '../styles/filter.css';
import {FaArrowDown} from 'react-icons/fa';
import {useNavigate, useLocation} from 'react-router';

export function CollectionFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickSort = (event: React.MouseEvent) => {
    if (
      event?.target instanceof Element &&
      event.target.closest('.sort-title')
    ) {
      event.target
        .closest('.collection-filter-container')
        ?.classList.toggle('show');
    }
  };

  const onSortParam = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const sortKey = target.getAttribute('data-sort-key');
    const reverse = target.getAttribute('data-sort-reverse') === 'false';

    if (sortKey) {
      const searchParams = new URLSearchParams(location.search);

      // Update sort parameters
      searchParams.set('sortKey', sortKey);
      searchParams.set('reverse', reverse.toString());

      // Remove pagination parameters to start from first page
      searchParams.delete('cursor');
      searchParams.delete('direction');

      // Navigate with new sort parameters
      navigate(`${location.pathname}?${searchParams.toString()}`, {
        replace: true,
      });

      // Close the dropdown
      target.closest('.collection-filter-container')?.classList.remove('show');
    }
  };

  const onKeyPressHandler = (
    event: React.KeyboardEvent,
    callback: () => void,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  // Get current sort parameters from URL
  const searchParams = new URLSearchParams(location.search);
  const currentSortKey = searchParams.get('sortKey') || 'MANUAL';
  const currentReverse = searchParams.get('reverse') === 'false';

  return (
    <section>
      <div
        className="collection-filter-container"
        onClick={onClickSort}
        role="button"
        tabIndex={0}
        onKeyDown={(e) =>
          onKeyPressHandler(e, () => {
            const container = e.currentTarget;
            container.classList.toggle('show');
          })
        }
      >
        <p className="sort-title">
          Sort By <FaArrowDown />
        </p>
        <ul>
          <li
            data-sort-key="TITLE"
            data-sort-reverse="false"
            onClick={onSortParam}
            onKeyDown={(e) =>
              onKeyPressHandler(e, () =>
                onSortParam(e as unknown as React.MouseEvent),
              )
            }
            role="button"
            tabIndex={0}
            className={
              currentSortKey === 'TITLE' && currentReverse ? 'active' : ''
            }
          >
            Alphabetically, A-Z
          </li>

          <li
            data-sort-key="PRICE"
            data-sort-reverse="false"
            onClick={onSortParam}
            onKeyDown={(e) =>
              onKeyPressHandler(e, () =>
                onSortParam(e as unknown as React.MouseEvent),
              )
            }
            role="button"
            tabIndex={0}
            className={
              currentSortKey === 'PRICE' && !currentReverse ? 'active' : ''
            }
          >
            Price, Low to high
          </li>

          <li
            data-sort-key="BEST_SELLING"
            data-sort-reverse="false"
            onClick={onSortParam}
            onKeyDown={(e) =>
              onKeyPressHandler(e, () =>
                onSortParam(e as unknown as React.MouseEvent),
              )
            }
            role="button"
            tabIndex={0}
            className={
              currentSortKey === 'BEST_SELLING' && !currentReverse
                ? 'active'
                : ''
            }
          >
            Best Selling
          </li>
        </ul>
      </div>
    </section>
  );
}
