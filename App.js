import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  BackHandler,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const PORTAL_URL = 'http://37.32.10.1:3737';

export default function App() {
  const webView = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (!canGoBack) return false;
        webView.current?.goBack();
        return true;
      },
    );
    return () => subscription.remove();
  }, [canGoBack]);

  const retry = () => {
    setLoadError(false);
    setLoading(true);
    webView.current?.reload();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}>درگاه خدمات شهری</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="بارگذاری دوباره"
          onPress={retry}
          style={styles.refreshButton}
        >
          <Text style={styles.refreshText}>بارگذاری دوباره</Text>
        </Pressable>
      </View>

      <View style={styles.warning}>
        <Text style={styles.warningText}>
          اتصال این نشانی HTTP رمزنگاری نمی‌شود. برای ورود، نسخهٔ HTTPS را ترجیح دهید.
        </Text>
      </View>

      {loading && !loadError ? (
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, { width: `${Math.max(progress * 100, 8)}%` }]} />
        </View>
      ) : null}

      <View style={styles.webContainer}>
        <WebView
          ref={webView}
          source={{ uri: PORTAL_URL }}
          originWhitelist={['http://*', 'https://*']}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          onNavigationStateChange={(state) => setCanGoBack(state.canGoBack)}
          onLoadStart={() => {
            setLoadError(false);
            setLoading(true);
            setProgress(0);
          }}
          onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
          onLoadEnd={() => {
            setLoading(false);
            setProgress(1);
          }}
          onError={() => {
            setLoading(false);
            setLoadError(true);
          }}
          style={styles.webView}
        />

        {loadError ? (
          <View style={styles.errorPanel}>
            <Text style={styles.errorTitle}>بارگذاری صفحه انجام نشد</Text>
            <Text style={styles.errorMessage}>
              اتصال به درگاه را بررسی کنید و دوباره تلاش کنید.
            </Text>
            <Pressable accessibilityRole="button" onPress={retry} style={styles.retryButton}>
              <Text style={styles.retryText}>تلاش دوباره</Text>
            </Pressable>
          </View>
        ) : null}
      </View>

      <View style={styles.toolbar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="بازگشت"
          disabled={!canGoBack}
          onPress={() => webView.current?.goBack()}
          style={styles.navButton}
        >
          <Text style={[styles.navText, !canGoBack && styles.disabledText]}>بازگشت</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="بارگذاری دوباره"
          onPress={retry}
          style={styles.navButton}
        >
          <Text style={styles.navText}>بارگذاری دوباره</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    minHeight: 54,
    paddingHorizontal: 16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e7ebef',
  },
  title: { color: '#172438', fontSize: 17, fontWeight: '700', writingDirection: 'rtl' },
  refreshButton: { padding: 8 },
  refreshText: { color: '#315b83', fontSize: 13, writingDirection: 'rtl' },
  warning: { backgroundColor: '#fff4df', paddingHorizontal: 14, paddingVertical: 9 },
  warningText: {
    color: '#7c5315',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  progressTrack: { height: 2, backgroundColor: '#edf1f5' },
  progressBar: { height: 2, backgroundColor: '#376c9c' },
  webContainer: { flex: 1 },
  webView: { flex: 1, backgroundColor: '#ffffff' },
  errorPanel: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#ffffff',
  },
  errorTitle: { color: '#172438', fontSize: 19, fontWeight: '700', textAlign: 'center' },
  errorMessage: {
    marginTop: 10,
    color: '#637083',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  retryButton: { marginTop: 20, paddingHorizontal: 20, paddingVertical: 11, borderRadius: 9, backgroundColor: '#315b83' },
  retryText: { color: '#ffffff', fontSize: 14, fontWeight: '600', writingDirection: 'rtl' },
  toolbar: {
    minHeight: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7ebef',
    backgroundColor: '#ffffff',
  },
  navButton: { minWidth: 110, alignItems: 'center', padding: 10 },
  navText: { color: '#315b83', fontSize: 13, writingDirection: 'rtl' },
  disabledText: { color: '#aab3bd' },
});
