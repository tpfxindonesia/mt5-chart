// Initialize TradingView widget
(function() {
  const widget = new TradingView.widget({
    symbol: 'EURUSD',
    interval: '1',
    container_id: 'tv_container',
    datafeed: new Datafeeds.UDFCompatibleDatafeed(window.location.origin + '/api'),
    library_path: 'tradingview/charting_library/',
    locale: 'en',
    disabled_features: ['use_localstorage_for_settings'],
    enabled_features: ['study_templates'],
    width: '100%',
    height: '100%',
  });
})();
