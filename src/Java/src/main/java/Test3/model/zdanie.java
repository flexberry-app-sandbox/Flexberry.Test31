package Test3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: здание
 */
@Entity(name = "IISTest3здание")
@Table(schema = "public", name = "здание")
public class zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Улица")
    private String улица;

    @Column(name = "НомерДома")
    private String номердома;

    @Column(name = "КоличествоЭтаж")
    private Integer количествоэтаж;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gorod")
    @Convert("Gorod")
    @Column(name = "Город", length = 16, unique = true, nullable = false)
    private UUID _gorodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gorod", insertable = false, updatable = false)
    private Gorod gorod;


    public zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУлица() {
      return улица;
    }

    public void setУлица(String улица) {
      this.улица = улица;
    }

    public String getНомерДома() {
      return номердома;
    }

    public void setНомерДома(String номердома) {
      this.номердома = номердома;
    }

    public Integer getКоличествоЭтаж() {
      return количествоэтаж;
    }

    public void setКоличествоЭтаж(Integer количествоэтаж) {
      this.количествоэтаж = количествоэтаж;
    }


}