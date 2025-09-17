import React from 'react';
import {View} from 'react-native';
import AppText from '../../../../components/atoms/AppText';
import {useThemeStore} from '../../../../zustand/useThemeStore';
import {generateStyles} from './styles';
import {TripPlannerProps} from '../../types';

const TripPlanner: React.FC<TripPlannerProps> = () => {
  const {Theme} = useThemeStore();
  const styles = generateStyles(Theme);

  return (
    <View style={styles.container}>
      <View style={styles.plannerCard}>
        <AppText variant="semiBold" style={styles.plannerDescription}>
          استعد لاكتشاف فيتنام في رحلة مثالية لمدة 7 أيام تجمع بين الطبيعة
          الخلابة، المدن التاريخية، والثقافة الفريدة. ستبدأ جولتك في العاصمة
          هانوي، وتبحر في المياه الصافية لخليج ها لونج، ثم تنتقل إلى وسط البلاد
          لاستكشاف سحر دا نانغ وهوي آن، قبل أن تختتم رحلتك بجولة ممتعة إلى جبل
          الرخام و"جسر الأيادي الذهبية".
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          هذه الرحلة مصممة بعناية لتمنحك توازنًا بين الاستكشاف، الراحة، والأنشطة
          الممتعة، مع إقامة فاخرة وجولات يومية مصحوبة بمرشدين محليين.
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'🗓️ مدة الرحلة: \n7 أيام / 6 ليالٍ'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'🏨 يشمل: \nالإقامة في فنادق 4⭐ أو 5⭐'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'تذاكر الطيران الداخلي (هانوي → دا نانغ)'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'جولات يومية مع مرشد'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'رحلة بحرية ليلية في خليج ها لونج'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'جميع التنقلات والمواصلات الداخلية'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'وجبات حسب البرنامج'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'🎯 أبرز الأنشطة: \nجولة ثقافية في هانوي'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'إقامة ليلية على متن كروز في خليج ها لونج'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'استكشاف مدينة هوي آن القديمة'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'زيارة با نا هيلز و"جسر الأيادي الذهبية"'}{' '}
        </AppText>

        <AppText variant="semiBold" style={styles.plannerDescription}>
          {'تجربة المطبخ الفيتنامي الأصيل'}{' '}
        </AppText>
      </View>
    </View>
  );
};

export {TripPlanner};
