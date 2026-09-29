import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.page}>
        <View style={styles.topline}>
          <Text style={styles.eyebrow}>نسخهٔ توسعه</Text>
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>برنامهٔ شما</Text>
        <Text style={styles.subtitle}>
          پوستهٔ اولیه برای بازسازی و افزودن قابلیت‌های مجاز
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>پروژه آمادهٔ توسعه است</Text>
          <Text style={styles.body}>
            ساختار React Native و بیلد خودکار اندروید تنظیم شده است. صفحه‌ها و
            منطق نسخهٔ اصلی پس از بررسی جریان‌ها به این پروژه اضافه می‌شوند.
          </Text>
          <View style={styles.divider} />
          <Text style={styles.noteTitle}>برای شروع مرحلهٔ بعد</Text>
          <Text style={styles.note}>
            تصاویر صفحه‌ها و فهرست دقیق قابلیت‌هایی را که می‌خواهید اضافه شوند
            مشخص کنید.
          </Text>
        </View>

        <Text style={styles.footer}>ساخت اندروید با GitHub Actions</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f7fa' },
  page: { flex: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 20 },
  topline: { flexDirection: 'row-reverse', alignItems: 'center', gap: 8 },
  eyebrow: { color: '#637083', fontSize: 13, writingDirection: 'rtl' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#c58b36' },
  title: {
    marginTop: 46,
    color: '#172438',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  subtitle: {
    marginTop: 10,
    color: '#637083',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  card: {
    marginTop: 32,
    padding: 22,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5eaf0',
  },
  cardTitle: {
    color: '#172438',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  body: {
    marginTop: 12,
    color: '#526074',
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  divider: { height: 1, backgroundColor: '#edf0f4', marginVertical: 20 },
  noteTitle: {
    color: '#a46c20',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  note: {
    marginTop: 8,
    color: '#637083',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  footer: {
    marginTop: 'auto',
    color: '#8a95a5',
    fontSize: 12,
    textAlign: 'center',
  },
});
